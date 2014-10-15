var app = angular.module('LoanCalculator');

app.service('bankService', function($http){

	this.getRate = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:9004/interest_rate'
		})
	};

});