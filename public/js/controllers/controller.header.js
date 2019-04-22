angular.module('term')
    .controller('HeaderCtrl', HeaderCtrl);
    
    HeaderCtrl.$inject = ['$http'];
    
    function HeaderCtrl ($http){
        var vm = this;
        
       vm.active = 0;
       
       vm.setActive = function(index){
           vm.active = index;
       }
    
    }