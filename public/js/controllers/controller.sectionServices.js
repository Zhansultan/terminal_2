angular.module('term')
    .controller('sectionServicesCtrl', sectionServicesCtrl);
    
    sectionServicesCtrl.$inject = ['$http', '$state', '$rootScope'];
    
    function sectionServicesCtrl ($http, $state, $rootScope){
        var vm = this;
        vm.id = $state.params.id;
        vm.sections = $rootScope.sections;   
        
        console.log('section id = ' + vm.id);
        vm.section = $rootScope.sections.find(p => p.id == vm.id);
        console.log('section ====== ' + vm.section.title);
        console.log('section == ' + vm.section.services);
        console.log(vm.section);
        vm.services = [];
        for(i = 0; i < vm.section.services.length; i++) {

            vm.services[i] = $rootScope.services.find(p => p.id == vm.section.services[i]);
            // console.log('vm.services = '+vm.services[i]['title']);

        }
        console.log(vm.services);
        
        

    }