(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('trabalheconoscoService', serviceFunction);

    serviceFunction.$inject = ['$http', '$location', '$cacheFactory', 'exception', 'api'];

    /* @ngInject */
    function serviceFunction($http, $location, $cacheFactory, exception, api) {
        var service = {
            getTrabalheConosco: getTrabalheConosco,
            clearCache: clearCache
        };

        return service;

        /**
         * Get page 'Trabalhe Conosco'.
         * @return {Promise} A promise that returns data of page 'Trabalhe Conosco' content if resolved
         */
        function getTrabalheConosco() {
            return $http.get(api, { cache: true })
                .then(getTrabalheConoscoSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getTrabalheConosco')(message);
                    $location.url('/');
                });

            function getTrabalheConoscoSuccess(response) {
                var trabalhe_conosco = response.data.trabalhe_conosco;

                return trabalhe_conosco;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();