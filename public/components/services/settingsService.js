angular.module("crossfit").service("settingsService", function($http) {



this.newWod = function(wod){
    return $http({
        method:"POST",
        url:"/api/wod",
        data:wod

    })
}


});
