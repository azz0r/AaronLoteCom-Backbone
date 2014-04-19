require.config({

  baseUrl: "js/scripts",

  // alias libraries paths.  Must set 'angular'
  paths: {
    'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min',
    'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular-route.min',
    'angularAMD': '//raw.github.com/marcoslin/bower-angularAMD/v0.1.0/angularAMD.min'
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'angularAMD': ['angular'],
    'angular-route': ['angular']
  },

  // kick start application
  deps: ['app']
});
