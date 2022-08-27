const journeyPageElem = document.getElementById("journeyPage");
const trackMoneyElem = document.getElementById("trackMoney");
const createBudgetElem = document.getElementById("createBudget");

function modCashFlow() {
    journeyPageElem.style.display = "none";
    trackMoneyElem.style.display = "block";
}

function modBudget() {
    journeyPageElem.style.display = "none";
    createBudgetElem.style.display = "block";
}