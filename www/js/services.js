var appURL = 'http://localhost:3000';

angular.module('dataWarehouse', [])

  .service('dataGrabber', ['$http', '$q', function ($http, $q) {
    var deferrable = $q.defer();

    return {
      resourceGet: function (resource) {
        var promise = $http.get(appURL + resource);

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
