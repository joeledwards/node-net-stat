const netStat = require('./index');

netStat.readStats()
.then((stats) => {
  console.log(`Network stats :\n${JSON.stringify(stats, null, 2)}`);
})
.catch((error) => {
  console.log(`Error reading stats: ${error}\n${error.stack}`);
});

