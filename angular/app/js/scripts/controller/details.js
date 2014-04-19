define(['app'],
  function (app) {
    app.register.controller('DetailsController',
      function ($scope, $http) {
        // default
        $scope.collection = [];
        $scope.loaded = false;
        $scope.errors = null;

        // get items
        $http.get('js/store/details.json')
          .success(function(collection) {
            $scope.loaded = true;
            $scope.collection = collection;
          }).error(function(err) {
            $scope.loaded = true;
            $scope.errors = err;
          });
      });
  });