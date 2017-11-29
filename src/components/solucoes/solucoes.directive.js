(function () {

    'use strict';

    angular.module('app.solucoes')
        .directive('tmplSolucoes', directiveFunction)
        .controller('SolucoesController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/solucoes/solucoes.html',
            scope: {
            },
            controller: 'SolucoesController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger', 'solucoesService'];

    /* @ngInject */
    function ControllerFunction(Title, logger, solucoesService) {
        var vm = this;
        var page = 'Soluções';
        vm.solucoes = null;

        activate();

        function activate() {
            Title.setTitle(page);
            return getSolucoes().then(function() {
                logger.log('Activated ' + page + ' Viewer');
            });
        }

        function getSolucoes() {
            return solucoesService.getSolucoes().then(function(data) {
                vm.solucoes = data;
                return vm.solucoes;
            });
        }
    }

})();
