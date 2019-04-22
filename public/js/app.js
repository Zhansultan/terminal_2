angular.module('term', [ 
    'ui.router'
    ]).config(routeConfig);
    
    routeConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    
    function routeConfig($stateProvider, $locationProvider, $urlRouterProvider){
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/views/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                })
                .state('admin', {
                    url: '/admin',
                    templateUrl: '/views/admin.html',
                    controller: 'AdminCtrl',
                    controllerAs: 'vm'
                })
                .state('pay', {
                    url: '/pay/:id',
                    templateUrl: '/views/pay.html',
                    controller: 'PayCtrl',
                    controllerAs: 'vm'
                })
                .state('sections', {
                    url: '/sections',
                    templateUrl: '/views/sections.html',
                    controller: 'SectionsCtrl',
                    controllerAs: 'vm'
                })
                .state('sectionServices', {
                    url: '/sectionServices/:id',
                    templateUrl: '/views/sectionServices.html',
                    controller: 'sectionServicesCtrl',
                    controllerAs: 'vm'
                });
    }