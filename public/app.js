angular.module("crossfit", ['satellizer','ui.router']).config(function($stateProvider, $urlRouterProvider) {


  $stateProvider


    .state('login', {
      url: '/login',
        templateUrl: 'components/views/login.html',
        controller: 'loginCtrl'
    })
    .state('signUp', {
      url: '/signUp',
        templateUrl: 'components/views/signUp.html',
        controller: 'loginCtrl'
    })
    .state('wod', {
          url: '/wod',
            templateUrl: 'components/views/wod.html',
            controller: 'wodCtrl'
        })

            .state('account', {
                url: '/account',
              templateUrl: 'components/views/account.html',
              controller: 'accountCtrl'
          })
          .state('scheduale', {
              url: '/scheduale',
            templateUrl: 'components/views/scheduale.html',
            controller: 'schedualeCtrl'
        })
        .state('settings', {
            url: '/settings',
          templateUrl: 'components/views/settings.html',
          controller: 'settingsCtrl'
      })
      .state('addWod', {
          url: '/addWod',
        templateUrl: 'components/views/addWod.html',
        controller: 'addWodCtrl'
    }) .state('checkIn', {
         url: '/checkIn',
       templateUrl: 'components/views/checkin.html',
       controller: 'checkInCtrl'
   })





  $urlRouterProvider.otherwise('/login');

});
