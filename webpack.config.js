const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // name: 'MeanApp',

  // exposes: {
  //   './Component': './src\app\app.ts',
  // },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },

  remotes: {
    microapp: "microapp@http://localhost:4201/remoteEntry.js",
  },
shared: {
    "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
  },
});
