angular.module('term')
    .controller('PayCtrl', PayCtrl);
    
    PayCtrl.$inject = ['$http', '$state', '$rootScope', '$element'];
    
    function PayCtrl ($http, $state, $rootScope, $element){
        var vm = this;
        vm.id = $state.params.id;
        vm.status = 1;
        vm.service = $rootScope.services.find(p => p.id == vm.id);
        console.log(vm.service);
        // vm.width = 0;
        // vm.width = angular.element(document.getElementsByClassName("phone")[0].offsetWidth);
        // console.log(typeof(vm.width));
        
        console.log(vm.width);
        
        vm.nextLayout = function() {
            if(vm.status < 4) {
                vm.status++;
                console.log('status++ = ' + vm.status);
                
            }
        }
        vm.prevLayout = function() {
            if(vm.status >= 1) {
                vm.status--;
                console.log('status-- = ' + vm.status);
            }
            if(vm.status < 1) {
                vm.status--;
                $state.go('home');
                console.log('status-- = ' + vm.status + 'go home');
            }
        }
        vm.home = function() {
            $state.go('home');
            console.log('go home');
            
        }


        vm.length = vm.service.fields.length;
        console.log('length = ' + vm.length);

        
    }