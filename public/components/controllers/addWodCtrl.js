angular.module("crossfit").controller("addWodCtrl", function($scope,settingsService, $auth, $state) {


    $scope.newWod = function(wod){
        
        settingsService.newWod(wod);
    }

    settingsService.getCurrentUser().then(function(res){
        console.log(res.data.admin)

        $scope.currentUser = res.data
        $scope.admin = res.data.admin
        console.log($scope.currentUser)

    })


});
