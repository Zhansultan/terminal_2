angular.module('term')
    .controller('SectionsCtrl', SectionsCtrl);
    
    SectionsCtrl.$inject = ['$http', '$state', '$rootScope'];
    
    function SectionsCtrl ($http, $state, $rootScope){
        var vm = this;
        
        vm.sections = $rootScope.sections;    
        

    }