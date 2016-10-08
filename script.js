
var cash = 0;
var moneyMultiplier = 1;

var moneyOutput = document.getElementsByClassName("moneyOutput");

setInterval (update, 100);

function update () {
    addCash (moneyMultiplier);
}

function addCash (cash) {
    cash += cash;
    for (var i = 0; i < moneyOutput.length; i++) {
        moneyOutput[i].innerHTML = cash;
    }
}