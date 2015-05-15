angular.module('curRate')
    .factory('currencyConverter', function() {
      var ltlToForeignRates = {
        LTL: 1,
        EUR: 3.4528,
        USD: 2.80,
        PLN: 0.78
      };
      var convert = function (amount, inCurr, outCurr) {
        return amount * ltlToForeignRates[outCurr] / ltlToForeignRates[inCurr];
      };
    
      return {
        convert: convert
      };
});