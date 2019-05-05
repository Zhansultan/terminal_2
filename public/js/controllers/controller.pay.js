angular.module('term')
    .controller('PayCtrl', PayCtrl);
    
    PayCtrl.$inject = ['$http', '$state', '$rootScope', '$scope'];
    
    function PayCtrl ($http, $state, $rootScope, $scope){
        var vm = this;
        vm.id = $state.params.id;
        vm.status = 1;
        vm.service = $rootScope.services.find(p => p.id == vm.id);
        console.log(vm.service);
        vm.phone = '';
        vm.interInput = [];
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

        vm.checkNumber = function() {
            console.log('call keyup');
            
        }


        vm.length = vm.service.fields.length;
        console.log('length = ' + vm.length);

        vm.keyPressNumb = function(arg, index) {
            console.log(arg);
            
            if(arg == 'delete') {
                vm.phone = vm.phone.substring(0, vm.phone.length - 1)
            }
            else if(arg == 'C') {
                vm.phone = '';
            }
            else {
                vm.phone += arg;
            }
        }

        vm.keyPress = function(arg, index) {
            console.log(arg);
            if(arg == 'delete') {
                vm.interInput[index] = vm.interInput[index].substring(0, vm.interInput[index].length - 1)
            }
            else if(arg == 'C') {
                vm.interInput[index] = '';
            }
            else if(arg == 'ctrl' || arg == 'alt' || arg == 'shift') {
                vm.interInput[index] += '';
            }
            else if(arg == 'space') {
                vm.interInput[index] += ' ';
            }
            else {
                if(vm.interInput[index] == undefined) {
                    vm.interInput[index] = '';
                }
                vm.interInput[index] += arg;
            }
        }

        vm.state = function(inp) {
            console.log('state = ' + inp);
            vm.indInput = inp;
            // console.log(vm.clicked);
            vm.clicked =  vm.indInput.num;
            console.log('ind = ' + vm.clicked);
            
            // vm.p = $rootScope.services.find(p => p.fields.name == vm.clicked);
            // console.log(vm.p);
            
        }



    }