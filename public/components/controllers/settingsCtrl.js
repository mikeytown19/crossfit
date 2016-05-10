angular.module("crossfit").controller("settingsCtrl", function($scope,settingsService) {


$scope.newWod = function(wod){
    settingsService.newWod(wod);
}

});
