angular.module("crossfit").controller("settingsCtrl", function($scope,settingsService, $auth, $state) {




$scope.logout = function(){
 $auth.logout().then(function(res){
     $state.go('login');
 });
}
    settingsService.getCurrentUser().then(function(res){
        console.log(res.data.admin)

        $scope.currentUser = res.data
        $scope.admin = res.data.admin
        console.log($scope.currentUser)

    })


    // Define the string


// Encode the String
 // Outputs: "SGVsbG8gV29ybGQh"

// Decode the String
 // Outputs: "Hello World!"


});
