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
        //this code of new API with API legacy free with ssl access key
        .get("https://data.fixer.io/api/latest?access_key=a058842594f14413cc3cb442b3bab132&symbols=CZK,GBP,HRK,NOK,PLN,USD,TRY,BYN")
        // this code worked before 2018-06-01
        // .get("https://api.fixer.io/latest?symbols=CZK,GBP,HRK,NOK,PLN,USD,TRY,BYN,CNY")
        .success(function(response){
            vm.data = response;
            // console.log(vm.data);
        })
        .error(function(){
            console.log("no data found");
        });
}

angular
        .module("curRate")
        .factory("getData", getData);
    
})();