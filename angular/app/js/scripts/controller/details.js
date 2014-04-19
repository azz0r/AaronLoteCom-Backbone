define(['app'],
  function (app) {
    app.register.controller('DetailsController',
      function ($scope) {
        $scope.message = "Message from Details Controller";
      });
  });
