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
        this.answers.trackSpending = choice;

        quesTwoElem.style.display = "none";
        quesThreeElem.style.display = "block";
    },

    q3: function (addProduct) {
        console.log("q3 - add product: " + JSON.stringify(addProduct))
        if (addProduct) {
            console.log("add product");
        }
        else {
            quesThreeElem.style.display = "none";
            quesFourElem.style.display = "block";
        }
    },

    q4: function (connectFI) {
        console.log("q4: " + JSON.stringify(connectFI));
        if (connectFI) {
            console.log("connect FI");
        }
        else {
            window.location.assign("journey.html");
        }
    }
}