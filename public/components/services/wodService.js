angular.module("crossfit").service("wodService", function($http) {



    this.getAllWods = function(){
        return $http({
            method:"GET",
            url:"/api/wod"
        }).then(function(res){
            console.log(res.data)
            return res;
        })
    }


    
});
