(function () {

    'use strict';

    angular.module('app.portfolio')
        .directive('tmplPortfolio', directiveFunction)
        .controller('PortfolioController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/portfolio/portfolio.html',
            scope: {
            },
            controller: 'PortfolioController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger', 'portfolioService'];

    /* @ngInject */
    function ControllerFunction(Title, logger, portfolioService) {
        var vm = this;
        var page = 'Portfólio';
        vm.portfolio = null;

        activate();

        function activate() {
            Title.setTitle(page);
            return getPortfolio().then(function() {
                logger.log('Activated ' + page + ' View');
            });
        }

        function getPortfolio() {
            return portfolioService.getPortfolio().then(function(data) {
                vm.portfolio = data;
                return vm.portfolio;
            });
        }
    }

})();
