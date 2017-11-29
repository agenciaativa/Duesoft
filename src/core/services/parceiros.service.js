(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('parceirosService', serviceFunction);

    serviceFunction.$inject = ['$http', '$location', '$cacheFactory', 'exception', 'api'];

    /* @ngInject */
    function serviceFunction($http, $location, $cacheFactory, exception, api) {
        var service = {
            getParceiros: getParceiros,
            clearCache: clearCache
        };

        return service;

        /**
         * Get page 'Seja Um Parceiro'.
         * @return {Promise} A promise that returns data of page 'seja um parceiro' content if resolved
         */
        function getParceiros() {
            return $http.get(api, { cache: true })
                .then(getParceirosSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getParceiros')(message);
                    $location.url('/');
                });

            function getParceirosSuccess(response) {
                var parceiros = response.data.parceiros;

                return parceiros;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();