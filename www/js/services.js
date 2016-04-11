var appURL = 'http://foo.com';

angular.module('dataWarehouse', [])

  .service('dataGrabber', ['$http', '$q', function ($http, $q) {
    var deferrable = $q.defer();

    return {
      resourceGet: function (resource) {
        var promise = $http.get(appURL + '/api/' + resource);

        promise.then(
          function (data) {
            deferrable.resolve(data);
          },
          function (error) {
            deferrable.reject(error);
          }
        );
        
        return deferrable.promise();
      }
    }
  }]);