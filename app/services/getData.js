// getData.js

(function(){

function getData($http){

    var vm = this;
    // return $http
    //     .get("app/data.json")
    //     .success(function(response){
    //         vm.data = response;
    //     })
    //     .error(function(){
    //         console.log("no data found");
    //     });
    
    return $http
        .get("https://api.fixer.io/latest?symbols=CZK,GBP,HRK,NOK,PLN,USD,TRY")
        .success(function(response){
            vm.data = response;
        })
        .error(function(){
            console.log("no data found");
        });
}

angular
        .module("curRate")
        .factory("getData", getData);
    
})();