var app = angular.module("idleIdol", []);

app.controller("idolController", function($scope) {
	OVERTIME_PAY = 20;
	$scope.IDOL_COST = 200;

	$scope.cash = 0;
	$scope.starPoints = 0;
	$scope.idols = [];
	$scope.idolCapacity = 3;

	$scope.industryPartyEnabled = true;
	$scope.workOvertimeEnabled = true;

	var moneyMultiplier = 1;

	console.log($scope.idols.length);

	setInterval (update, 100);

	$scope.tossMoney = function tossMoney() {
		$scope.cash = 0;
	}

	$scope.randomIdol = function randomIdol() {
		rand = Math.random();
		if(rand > 0.66) {
			$scope.idols.push("sponge.png");
		} else if(rand < 0.66 && rand > 0.33) {
			$scope.idols.push("garbage.png");
		} else {
			$scope.idols.push("hategirl.png");
		}
		console.log($scope.idols.length);
		removeCash($scope.IDOL_COST);
	}

	$scope.workOvertime = function workOvertime() {
		$scope.workOvertimeEnabled = false;
		setTimeout(function() {
			$scope.workOvertimeEnabled = true;
			addCash(OVERTIME_PAY);
		}, 1000);
	}

	$scope.industryParty = function industryParty() {
		removeCash(40);
		$scope.industryPartyEnabled = false;
		setTimeout(function() {
			addSP (1);
			$scope.industryPartyEnabled = true;
		}, 1000);
	}

	function update () {
	    addCash (moneyMultiplier);
	   	$scope.$apply();
	}

	function addCash (cashToAdd) {
	    $scope.cash += cashToAdd;
	}

	function removeCash (cashToRemove) {
		$scope.cash -= cashToRemove;
	}

	function addSP (starPointsToAdd) {
		$scope.starPoints += starPointsToAdd;
	}

	function roundDec (number) {
		return Math.round(number * 100) / 100;
	}
})