var app = angular.module("idleIdol", []);

app.controller("idolController", function($scope) {

    // Assets
    IDOL_IMAGES = [     // change this if you add more idols!
        "img/sponge.png",
        "img/garbage.png",
        "img/hategirl.png",
        "img/ghost.png"
    ]
    NUM_IDOLS = IDOL_IMAGES.length;

    // Debug variables
    $scope.DEBUG_MODE = false;
    $scope.password = "Debug password";

    // Costs/pay amounts
    OVERTIME_PAY = 20;
    $scope.IDOL_COST = 200;
    $scope.INDUSTRY_COST = 40;

    // "Inventory" variables
    $scope.cash = 0;
    $scope.starPoints = 0;
    $scope.idols = [];
    $scope.idolCapacity = 5;

    // Button-disabling variables
    $scope.industryPartyEnabled = true;
    $scope.workOvertimeEnabled = true;

    var moneyMultiplier = 1;

    setInterval (update, 500);

    // "Splurge on clothes" button. Who needs money, anyway?
    $scope.tossMoney = function tossMoney() {
        $scope.cash = 0;
    }

    // "Hire random idol" button. Exactly what it says.
    $scope.randomIdol = function randomIdol() {
        rand = Math.floor(Math.random() * NUM_IDOLS);
        $scope.idols.push(IDOL_IMAGES[rand]);
        removeCash($scope.IDOL_COST);
    }

    // "Fire an idol" button. Removes an idol at random.
    $scope.fireIdol = function fireIdol() {
        rand = Math.random() * $scope.idols.length;
        $scope.idols.splice(rand, 1);   // removes idol at index rand
    }

    // Infinitely clickable button. Please rename this and the button eventually...
    $scope.gitGud = function gitGud() {
        addCash(1);
    }

    // "Work overtime" button. Starts a timer, then adds $20 at the end of the timer.
    // Disables "Work overtime" for the duration.
    $scope.workOvertime = function workOvertime() {
        $scope.workOvertimeEnabled = false;
        setTimeout(function() {
            $scope.workOvertimeEnabled = true;
            addCash(OVERTIME_PAY);
        }, 1500);
    }

    // "Go to industry party" button. Subtracks $40, starts a timer, then adds 3 SP at the end of the timer.
    // Disables "Go to industry party" for the duration.
    $scope.industryParty = function industryParty() {
        removeCash($scope.INDUSTRY_COST);
        $scope.industryPartyEnabled = false;
        setTimeout(function() {
            addSP (1);
            $scope.industryPartyEnabled = true;
        }, 5000);
    }

    // "Tons of cash" debug button.
    $scope.tonsOfCash = function tonsOfCash() {
        addCash($scope.cash);
    }

    // "Reset everything" debug button.
    $scope.resetAll = function resetAll() {
        $scope.cash = 0;
        $scope.starPoints = 0;
        $scope.idols = [];
    }

    // "Tons of points" debug button.
    $scope.tonsOfPoints = function tonsOfPoints() {
        addSP(1);
        addSP($scope.starPoints);
    }

    // Core timer called by setInterval. Adds money slowly over time.
    function update () {
        addCash (moneyMultiplier);
        $scope.$apply();
    }

    // Private function.
    function addCash (cashToAdd) {
        $scope.cash += cashToAdd;
    }

    // Private function.
    function removeCash (cashToRemove) {
        $scope.cash -= cashToRemove;
    }

    // Private function.
    function addSP (starPointsToAdd) {
        $scope.starPoints += starPointsToAdd;
    }

    // Private function.
    function roundDec (number) {
        return Math.round(number * 100) / 100;
    }
})
