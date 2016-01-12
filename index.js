const _ = require('lodash');
const Q = require('q');
const fs = require('fs');
const moment = require('moment');
const LBL = require('line-by-line');

function readStats() {
  var path = `/proc/net/dev`;

  return Q.nfcall(fs.readFile, path, 'utf-8')
  .then((contents) => {
    var stats = {
      timestamp: moment().toISOString(),
      interfaces: {},
    };

    var lines = contents.split(/\r?\n/);

    _(lines)
    .filter((line) => line.indexOf(':') >= 0)
    .each((line) => {
      var parts = _(line.split(/\s+/))
          .map((part) => part.trim())
          .filter((part) => part !== '')
          .value();

      var iface = _.trimRight(parts[0], ':');

      var ifaceStats = {
        rx: {
          bytes: parts[1],
          packets: parts[2],
          errors: parts[3],
          drop: parts[4],
          fifo: parts[5],
          frame: parts[6],
          compressed: parts[7],
          multicast: parts[8],
        },
        tx: {
          bytes: parts[9],
          packets: parts[10],
          errors: parts[11],
          drop: parts[12],
          fifo: parts[13],
          cols: parts[14],
          carrier: parts[15],
          compressed: parts[16],
        },
      };

      stats.interfaces[iface] = ifaceStats;
    })
    .value();

    return stats;
  });
}

module.exports = {
  readStats: readStats
};

