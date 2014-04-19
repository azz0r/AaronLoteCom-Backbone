define(['app'],
  function (app) {
    app.register.controller('JobsController',
      function ($scope, $http) {
        // default
        $scope.collection = [];
        $scope.loaded = false;
        $scope.errors = null;

        // get items
        $http.get('js/store/jobs.json')
          .success(function(collection) {
            $scope.loaded = true;
            $scope.collection = collection;
          }).error(function(err) {
            $scope.loaded = true;
            $scope.errors = err;
          });

        $scope.delete = function (item) {
          console.log(item);
        };

      });
  });