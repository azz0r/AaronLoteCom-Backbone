require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.10.2.min',
    underscore: 'libs/underscore/underscore-1.5.1.min',
    backbone: 'libs/backbone/backbone-1.0.0.min'
  },
  //prevent cache in all the files
  urlArgs: "bust=" + (new Date()).getTime(),
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
})


require([
  'app'
], function (App) {
  App.initialize()
})