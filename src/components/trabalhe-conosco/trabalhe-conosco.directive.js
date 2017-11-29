(function () {

    'use strict';

    angular.module('app.trabalheconosco')
        .directive('tmplTrabalheConosco', directiveFunction)
        .controller('TrabalheConoscoController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/trabalhe-conosco/trabalhe-conosco.html',
            scope: {
            },
            controller: 'TrabalheConoscoController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger', 'trabalheconoscoService'];

    /* @ngInject */
    function ControllerFunction(Title, logger, trabalheconoscoService) {
        var vm = this;
        var page = 'Trabalhe Conosco';
        vm.curriculo = {};
        activate();

        function activate() {
            Title.setTitle(page);
            return getTrabalheConosco().then(function() {
                logger.log('Activated ' + page + ' View');
            });
        }

        function getTrabalheConosco() {
            return trabalheconoscoService.getTrabalheConosco().then(function(data) {
                vm.curriculo = data;
                return vm.curriculo;
            });
        }
    }

})();
