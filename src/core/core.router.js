(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<div tmpl-home></div>'
            })
            .state('a-duesoft', {
                url: '/a-duesoft',
                template: '<div tmpl-sobre></div>'
            })
            /*.state('solucoes', {
                template: '<div ui-view></div>'
            })*/
            .state('solucoes', {
                url: '/solucoes',
                template: '<div tmpl-solucoes></div>'
            })
            .state('solucoes-detalhe', {
                url: '/solucoes/:solucaoSlug',
                template: '<div tmpl-solucao solucao="vm.solucao"></div>',
                resolve: {
                    solucao: ['solucoesService', '$stateParams', function(solucoesService, $stateParams) {
                        var slug = $stateParams.solucaoSlug;
                        return solucoesService.getSolucaoBySlug(slug)
                            .then(function(data) {
                                return data;
                            });
                    }]
                },
                controller: ['solucao', function(solucao) {
                    this.solucao = solucao;
                }],
                controllerAs: 'vm'
            })
            .state('clientes', {
                url: '/clientes',
                template: '<div tmpl-clientes></div>'
            })
            .state('parceria', {
                url: '/seja-um-parceiro',
                template: '<div tmpl-parceiros></div>'
            })
            .state('trabalhe-conosco', {
                url: '/trabalhe-conosco',
                template: '<div tmpl-trabalhe-conosco></div>'
            })
            .state('contato', {
                url: '/contato',
                template: '<div tmpl-contato></div>'
            });
    }
})();
