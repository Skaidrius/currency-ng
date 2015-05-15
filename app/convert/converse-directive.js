// converse-directive.js
(function(){

function converseDirective(){
    return {
        restrict: 'E',
        require: "?ngModel",
        scope: { active: '='},
        templateUrl: "app/convert/converse.html",
        controller: "MainController",
        controllerAs: "main"
    };
}

angular
    .module("curRate")
    .directive("converse", converseDirective);
    
})();

// https://docs.angularjs.org/guide/concepts