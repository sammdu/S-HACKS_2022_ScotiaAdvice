const quesOptionsElem = document.getElementById("quesOptions");
const quesOneElem = document.getElementById("quesOne");
const quesTwoElem = document.getElementById("quesTwo");
const quesThreeElem = document.getElementById("quesThree");
const quesFourElem = document.getElementById("quesFour");

function startQues() {
    quesOptionsElem.style.display = "none";
    quesOneElem.style.display = "block";
}

// questionnaire object
const q = {
    answers: {
        trackSpending: undefined,
        createBudget: undefined,
    },

    q1: function (choice) {
        console.log("q1: " + JSON.stringify(choice))
        this.answers.trackSpending = choice;

        quesOneElem.style.display = "none";
        quesTwoElem.style.display = "block";
    },

    q2: function (choice) {
        console.log("q2: " + JSON.stringify(choice))
    },

    q3: function (choice) {
        console.log("q3: " + JSON.stringify(choice))
    },

    q4: function (choice) {
        console.log("q4: " + JSON.stringify(choice))
    }
}