const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// import{} from "./src/app/app.module"


module.exports = withModuleFederationPlugin({

  name: 'microapp',
  filename: 'remoteEntry.js',
  exposes: {
    './Routes':'./src/app/app.routes.ts',
  },
 
  shared: {
 "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/platform-browser": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
  },
  

});
