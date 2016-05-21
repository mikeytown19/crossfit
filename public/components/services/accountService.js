angular.module("crossfit").service("accountService", function($http) {


this.storeWorkout = function(id, title, score, info){
    return $http({
        method:"POST",
        url:'/api/benchmark/' + id,
        data:{
            title:title,
            score:score,
            info:info
        }
    })
}


});
