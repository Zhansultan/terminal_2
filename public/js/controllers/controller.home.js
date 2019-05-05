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
                    type: 'text',
                    num: 0
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
                    type: 'text',
                    num: 0
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
                    type: 'text',
                    num: 0
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
                    type: 'text',
                    num: 0
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
                    type: 'text',
                    num: 0
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
                    type: 'text',
                    num: 0
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
                    type: 'text',
                    pattern: '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
                    num: 0
                },
                {
                    name: 'cabinet_id',
                    mask: 'olx_cabinet_id',
                    type: 'text',
                    num: 1        
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
            ];
        
        $rootScope.keyboard = [
            {
                lang: 'eng',
                chars: [
                    {
                        firstCondition: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
                        secondCondition: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
                    },
                    {
                        firstCondition: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
                        secondCondition: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|']
                    },
                    {
                        firstCondition: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"'],
                        secondCondition: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"']
                    },
                    {
                        firstCondition: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
                        secondCondition: ['z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?']
                    },
                    {
                        firstCondition: ['Ctrl', 'Alt', 'Space', 'Rus']
                    }
                ]
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
          
        // vm.resetTimer = function () { 
        //     clearTimeout(t); 
                        
        //     t = setTimeout(vm.logout, 1000);
        //     console.log('call resetTimer');
            
        // };

        vm.serchStr = '';
          

        vm.matchInArray = function(string, expressions) {

            var len = expressions.length;
            
            for (var i = 0; i < len; i++) {
                if (expressions[i].title.toUpperCase().includes(string)) {
                    console.log('i = ' + i);
                    return expressions[i];
                }
            }
        
            return false;
        
        }

        console.log('$rootScope.services = ');
        console.log($rootScope.services);
        vm.resS = [];
        vm.srch = function() {
            vm.resS =  vm.matchInArray(vm.serchStr, $rootScope.services);
            console.log('vm.resS = ');
            console.log(vm.resS);
            console.log('typeof = '+typeof(vm.resS));
            console.log('length = '+vm.resS.length);
        }
        
        console.log(vm.srch);


        vm.showKBoard = function() {
            vm.showKeyBoard = 1;
        }


        vm.keyPress = function(arg, index) {
            console.log(arg);
            if(arg == 'delete') {
                vm.serchStr = vm.serchStr.substring(0, vm.serchStr.length - 1)
            }
            else if(arg == 'clear') {
                vm.serchStr = '';
            }
            else if(arg == 'ctrl' || arg == 'alt' || arg == 'shift') {
                vm.serchStr += '';
            }
            else if(arg == 'space') {
                vm.serchStr += ' ';
            }
            else {
                if(vm.serchStr == undefined) {
                    vm.serchStr = '';
                }
                vm.serchStr += arg;
            }
        }

        vm.searchText = function() {

        }
    }