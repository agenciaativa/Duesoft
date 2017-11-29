(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('logisticaService', serviceFunction);

    serviceFunction.$inject = ['$http', '$location', '$cacheFactory', 'exception', 'api'];

    /* @ngInject */
    function serviceFunction($http, $location, $cacheFactory, exception, api) {
        var service = {
            getLogistica: getLogistica,
            clearCache: clearCache
        };

        return service;

        /**
         * Get logistica page.
         * @return {Promise} A promise that returns data of page logistica content if resolved
         */
        function getLogistica() {
            return $http.get(api, { cache: true })
                .then(getLogisticaSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getLogistica')(message);
                    $location.url('/');
                });

            function getLogisticaSuccess(response) {
                var logistica = response.data.logistica;

                return logistica;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();