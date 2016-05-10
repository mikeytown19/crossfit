angular.module("crossfit").controller("accountCtrl", function($scope, $auth, $state) {


    $scope.logout = function(){
     $auth.logout().then(function(res){
         $state.go('login');
     });
 }

});
