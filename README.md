# Moja Njiva

## Screenshots
![alt text](https://i.imgur.com/pVdHJvO.png)
![alt text](https://i.imgur.com/zbwCeXA.png)
![alt text](https://i.imgur.com/lPJ1T5m.png)



Web demo (with minimal functionality): https://moja-njiva.netlify.app/ 

## Installation

In `\node_modules\metro-config\src\defaults\blacklist.js`

```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

change to:

```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,  //this line
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

[link](https://github.com/expo/expo-cli/issues/1074)
