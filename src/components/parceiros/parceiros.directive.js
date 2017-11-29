(function () {

    'use strict';

    angular.module('app.parceiros')
        .directive('tmplParceiros', directiveFunction)
        .controller('ParceirosController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/parceiros/parceiros.html',
            scope: {
            },
            controller: 'ParceirosController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger', 'parceirosService'];

    /* @ngInject */
    function ControllerFunction(Title, logger, parceirosService) {
        var vm = this;
        var page = 'Seja um parceiro';
        vm.parceiros = null;

        activate();

        function activate() {
            Title.setTitle(page);
            return getParceiros().then(function() {
                logger.log('Activated ' + page + ' View');
            });
        }

        function getParceiros() {
            return parceirosService.getParceiros().then(function(data) {
                vm.parceiros = data;
                return vm.parceiros;
            });
        }
    }

})();
