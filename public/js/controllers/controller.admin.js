angular.module('term')
    .controller('AdminCtrl', AdminCtrl);
    
    AdminCtrl.$inject = ['$http'];
    
    function AdminCtrl ($http){
        var vm = this;
        
        vm.section = false;
        vm.service = false;
        vm.types = [
            {type: 1},
            {type: 2},
            {type: 3}
        ];

        $http.get('/api/admin/')
        .success(function(response){
            vm.sections = response;
            console.log(vm.sections.title);
        })
        .error(function(err){
            console.log(err);
        });

        $http.get('/api/adminService/')
        .success(function(response){
            vm.services = response;
            console.log(vm.services.title);
        })
        .error(function(err){
            console.log(err);
        });

        vm.showAddSection = function() {
            vm.section = !vm.section;
        }

        vm.addSection = function () {
            var data = new FormData();
            data.append('title', vm.title);
            data.append('img', vm.file);
            console.log(vm.file);

            $http.post('/api/section/', data , {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(response){
                vm.sections.push(response);
                vm.showAddSection();
            })
            .error(function(err){
                console.log(err);
            });
            
        }

        vm.showAddService = function() {
            vm.service = !vm.service;
        }

        vm.addService = function () {
            var data = new FormData();
            data.append('title', vm.serviceTitle);
            data.append('img', vm.serviceFile);
            data.append('section', vm.serviceSection);
            data.append('type', vm.serviceType);
            console.log('title - ' + vm.serviceTitle);
            console.log('section - ' + vm.serviceSection);
            console.log('type - ' + vm.serviceType);

            console.log('data append');

            $http.post('/api/service/', data , {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function(response){
                vm.services.push(response);
                vm.showAddService();
                console.log('success request');
                
            })
            .error(function(err){
                console.log(err);
            });
            
        }
    }