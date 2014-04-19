define(['angularAMD', 'angular-route'],
  function (angularAMD) {
    var app = angular.module("webapp", ['ngRoute']);

    app.config(function ($routeProvider) {
      $routeProvider
        .when("/details", angularAMD.route({
          templateUrl: 'js/views/details.html',
          controller: 'DetailsController',
          controllerUrl: 'controller/details'
        }))
        .when("/jobs", angularAMD.route({
          templateUrl: 'js/views/jobs.html',
          controller: 'JobsController',
          controllerUrl: 'controller/jobs'
        }))
        .when("/experience", angularAMD.route({
          templateUrl: 'js/views/experience.html',
          controller: 'ExperienceController',
          controllerUrl: 'controller/experience'
        }))
        .when("/references", angularAMD.route({
          templateUrl: 'js/views/references.html',
          controller: 'ReferencesController',
          controllerUrl: 'controller/references'
        }))
        .otherwise({redirectTo: "/details"});
    });

    angularAMD.bootstrap(app);

    return app;
  });
