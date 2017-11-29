(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('clientesService', serviceFunction);

    serviceFunction.$inject = ['$http', '$location', '$cacheFactory', 'exception', 'api'];

    /* @ngInject */
    function serviceFunction($http, $location, $cacheFactory, exception, api) {
        var service = {
            getClientes: getClientes,
            clearCache: clearCache
        };

        return service;

        /**
         * Get clientes page.
         * @return {Promise} A promise that returns data of page clientes content if resolved
         */
        function getClientes() {
            return $http.get(api, { cache: true })
                .then(getClientesSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getProdutos')(message);
                    $location.url('/');
                });

            function getClientesSuccess(response) {
                var clientes = response.data.clientes;

                return clientes;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();