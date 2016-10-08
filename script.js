var app = angular.module("idleIdol", []);

app.controller("idolController", function($scope) {
	$scope.cash = 0;
	$scope.idols = [];

	var moneyMultiplier = 1;

	setInterval (update, 100);

	$scope.tossMoney = function tossMoney() {
		$scope.cash = 0;
	}

	$scope.randomIdol = function randomIdol() {
		if(Math.random() > 0.5) {
			$scope.idols.push("sponge.png");
		} else {
			$scope.idols.push("hategirl.png");
		}

		$scope.cash -= 100;
	}

	$scope.workOvertime = function workOvertime() {
		$scope.cash += 20;
	}

	function update () {
	    addCash (moneyMultiplier);
	}

	function addCash (cashToAdd) {
	    $scope.cash += cashToAdd;
	    $scope.$apply();
	}

	function roundDec (number) {
		return Math.round(number * 100) / 100;
	}
})