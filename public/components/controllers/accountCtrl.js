angular.module("crossfit").controller("accountCtrl", function($scope, $auth, $state, settingsService, accountService) {

    settingsService.getCurrentUser().then(function(res) {

        $scope.currentUser = res.data
        $scope.admin = res.data.admin
        console.log($scope.currentUser)
    })

    $scope.storeWorkout = function(userId, title, score, info){
        accountService.storeWorkout(userId, title, score, info).then(function(res){
            console.log(res)
        })
    }

});
