// MainController.js
(function(){

function MainController($http, getData, $filter){

    // getting all currencies
    var vm = this;
        getData
            .success(function(response){
                vm.message = response.message;
                vm.rates = response.rates;
                vm.date = response.date;
                
                vm.currencies = [ /* based on euro course */
                    {   "name":"EUR", 
                        "rate": 1,
                        "symbol": " €"
                    }, {
                        "name": "GBP",
                        "rate": vm.rates["GBP"],
                        "symbol": " £"
                    }, {
                        "name": "CZK",
                        "rate": vm.rates["CZK"],
                        "symbol": " Kč"
                    }, {
                        "name": "HRK",
                        "rate": vm.rates["HRK"],
                        "symbol": " kn"
                    }, {
                        "name": "LTL *",  /* just for reference on former LTL/EUR course */
                        "rate": 3.4528,
                        "symbol": " Lt"
                    }, {
                        "name": "NOK",
                        "rate": vm.rates["NOK"],
                        "symbol": " kr"
                    }, {
                        "name": "PLN",
                        "rate": vm.rates["PLN"],
                        "symbol": " zł"
                    }, {
                        "name": "USD",
                        "rate": vm.rates["TRY"],
                        "symbol": " $"
                    }, {
                        "name": "TRY",
                        "rate": vm.rates["TRY"],
                        "symbol": " ₺"
                    }, {
                        "name": "BYN",
                        "rate": vm.rates["BYN"],
                        "symbol": " Br"
                    }, {
                        "name": "CNY",
                        "rate": vm.rates["CNY"],
                        "symbol": " ¥"
                    }
                ];
                
                
            })
            .error(function(){
                console.log("no data found");
            });

    // function to clear all values after click on input
    vm.clear = function(){
        for (var i=0; i < this.currencies.length; i++ ){
            vm.currencies[i].value = '';
        }
    };

}

MainController.$inject = ['$http', 'getData', '$filter'];
    
angular
    .module("curRate")
    .controller("MainController", MainController);
    
})();

(function(){
    function curYear(){
        var vm = this;
        vm.getYear = new Date();
    }

angular
    .module("curRate")
    .controller("curYear", curYear);
})();