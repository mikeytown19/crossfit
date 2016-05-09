angular.module("crossfit").service("loginService", function($http) {

this.userSignUp = function(){
    return $http({
        method:"POST",
        url:"auth/login"
    }).then(function(response){
        return response
    })
}

});
