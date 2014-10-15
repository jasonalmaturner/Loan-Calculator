var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, bankService){

	$scope.getRate = function(){
		bankService.getRate().then(function(data){
			$scope.interest_rate = data.data;
			console.log($scope.interest_rate);
		})
	}

	$scope.calculatePayment = function(){
		principalAmount = parseInt($scope.principal)
		$scope.monthly_payment = ((principalAmount + (principalAmount * ($scope.interest_rate * 0.01) * 4)) / 48).toFixed(2);
	}

	$scope.getRate();
})