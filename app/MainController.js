// MainController.js
(function(){

function MainController($http, getData, $filter){

    // getting all currencies
    var vm = this;
        getData
            .success(function(response){
                vm.message = response.message;
                vm.currencies = response.currencies;
            })
            .error(function(){
                console.log("no data found");
            });
    
    // getting today's date
    vm.date = new Date;
    vm.date = $filter('date')(vm.date, "yyyy-MM-dd");
    vm.dateinfo = '(' + vm.date + ')';

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