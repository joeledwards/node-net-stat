This module reads and parses the stats for the network interfaces in the /proc/net/dev

Example JSON of the generated object:

```JSON
{
  "timestamp": "2016-01-12T05:25:08.328Z",
  "interfaces": {
    "lo": {
      "rx": {
        "bytes": "10552264",
        "packets": "143360",
        "errors": "0",
        "drop": "0",
        "fifo": "0",
        "frame": "0",
        "compressed": "0",
        "multicast": "0"
      },
      "tx": {
        "bytes": "10552264",
        "packets": "143360",
        "errors": "0",
        "drop": "0",
        "fifo": "0",
        "cols": "0",
        "carrier": "0",
        "compressed": "0"
      }
    },
    "wlan1": {
      "rx": {
        "bytes": "671194438",
        "packets": "1404138",
        "errors": "0",
        "drop": "0",
        "fifo": "0",
        "frame": "1935213",
        "compressed": "0",
        "multicast": "0"
      },
      "tx": {
        "bytes": "2001681861",
        "packets": "1713623",
        "errors": "0",
        "drop": "0",
        "fifo": "0",
        "cols": "0",
        "carrier": "0",
        "compressed": "0"
      }
    }
  }
}
```

