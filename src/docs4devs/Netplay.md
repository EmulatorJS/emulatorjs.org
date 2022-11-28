# Netplay


Netplay has been officially supported since version 3.1.5. Released November 27, 2022.

## To add to your site

1. Set a game id in the javascript config
```js
EJS_gameID = 1; //Id needs to be unique per game in your website!
```

2. At the moment, netplay requires the old cores. To do this you must add this line to your code.
```js
EJS_oldCores = true;
```

**These 2 steps will add netplay to your website!**




## To host your own server:

1. Clone the EmulatorJS-netplay repository
```sh
git clone https://github.com/EmulatorJS/EmulatorJS-netplay.git
```

2. Install nodejs dependencies
```sh
npm install
```

3. start the server
```sh
npm run start
```

You can then set your netplay server with the `EJS_netplayUrl` setting.
```js
EJS_netplayUrl = "URL HERE";
```
