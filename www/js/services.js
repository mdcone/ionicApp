var appURL = 'https://dylanappbackend.herokuapp.com';

angular.module('dataWarehouse', [])

  .service('dataGrabber', ['$http', '$q', function ($http, $q) {

    return {
      resourceGet: function (resource) {
        var promise = $http.get(appURL + resource);
        var deferrable = $q.defer();

        promise.then(
          function (data) {
            deferrable.resolve(data);
          },
          function (error) {
            deferrable.reject(error);
          }
        );

        return deferrable.promise;
      }
    }
  }])

  .service('stateMaintainer', function () {
    var stateStore = {};

    return {
      getItem: function (item) {
        return stateStore[item];
      },
      setItem: function (item, value) {
        stateStore = angular.copy(stateStore);
        stateStore[item] = value;
      }
    }
  });
