(function () {
    'use strict';

    angular
        .module('app.topnav')
        .directive('tmplTopnav', directiveFunction)
        .controller('TopNavController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/topnav/topnav.html',
            scope: {
                config: '='
            },
            controller: 'TopNavController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$state'];

    /* @ngInject */
    function ControllerFunction($state) {
        var vm = this;
        vm.state = $state;
    }

})();
