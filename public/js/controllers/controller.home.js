angular.module('term')
    .controller('HomeCtrl', HomeCtrl);
    
    HomeCtrl.$inject = ['$http', '$state', '$scope', '$rootScope'];
    
    function HomeCtrl ($http, $state, $scope, $rootScope){
        var vm = this;
        vm.active = 0;
        vm.show = true;
        vm.s = true;

        $rootScope.services =
            [{
                title: 'Activ',
                img: '../images/activ.jpg',
                section: 1,
                type: 'phone',
                fields: [{
                    name: 'phone',
                    mask: 'phone',
                    type: 'text'
                }],
                id: 1
            },
            {
                title: 'Altel',
                img: '../images/altel.jpg',
                section: 1,
                type: 'phone',
                fields: [{
                    name: 'phone',
                    mask: 'phone',
                    type: 'text'
                }],
                id: 3
            },
            {
                title: 'Tele2',
                img: '../images/tele2.jpg',
                section: 1,
                type: 'phone',
                fields: [{
                    name: 'phone',
                    mask: 'phone',
                    type: 'text'
                }],
                id: 4
            },
            {
                title: 'Оңай',
                img: '../images/onay.png',
                section: 2,
                type: 'cabinet_id',
                fields: [{
                    name: 'card_id',
                    mask: 'card_id',
                    type: 'text'
                }],
                id: 5
            },
            {
                title: 'Kolesa.kz',
                img: '../images/kolesa.jpg',
                section: 4,
                type: 'cabinet_id',
                fields: [{
                    name: 'cabinet_id',
                    mask: 'cabinet_id',
                    type: 'text'
                }],
                id: 6 
            },
            {
                title: 'Kazakhtelecom',
                img: '../images/ktelecom.jpg',
                section: 3,
                type: 'phone',
                fields: [{
                    name: 'phone',
                    mask: 'phone',
                    type: 'text'
                }],
                id: 7 
            },
            {
                title: 'Olx',
                img: '../images/olx.jpg',
                section: 4,
                type: 'cabinet_id',
                fields: [{
                    name: 'email',
                    mask: 'email',
                    type: 'text'
                },
                {
                    name: 'cabinet_id',
                    mask: 'olx_cabinet_id',
                    type: 'text'
                }],
                id: 8 
            }];

            $rootScope.sections = [
                {
                    title: 'Мобильные платежи',
                    img: '../images/online-payment.png',
                    services: [1, 3, 4],
                    id: 1
                },
                {
                    title: 'Коммунальные',
                    img: '../images/utilities.png',
                    services: [7],
                    id: 2
                },
                {
                    title: 'Интернет',
                    img: '../images/internet.png',
                    services: [6, 8],
                    id: 3
                },
                {
                    title: 'Транспорт',
                    img: '../images/travel.png',
                    services: [5],
                    id: 4
                }
            ]
            
        vm.services = $rootScope.services;
        vm.toggleAdsNone = function(index) {
            vm.active = index;
            vm.show = !vm.show;
            console.log('click toggleAds');
        };
        
        var t; 
        // window.onload = vm.resetTimer; 
        // window.onclick = vm.resetTimer;
        // document.onmousemove = vm.resetTimer; 
        // document.onkeypress = vm.resetTimer; 
                  
        vm.logout = function() { 
            vm.active = 1;
            vm.show = !vm.show; 
            vm.s = !vm.s;
            console.log('you are logout');
            console.log('active = ' + vm.active);
            console.log('show = ' + vm.show);
              
              
        };
          
        vm.resetTimer = function () { 
            clearTimeout(t); 
                        
            t = setTimeout(vm.logout, 1000);
            console.log('call resetTimer');
            
        };

        
          

        

    }