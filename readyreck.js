// Canvas instructions

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(10, 10, 100, 50);

// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
var survey = {
    title: 'Calculating your garden space',
    questions: [
        {
            text: "Please enter the dimensions of your garden space. Think of the space as roughly being a rectangle or square.",
            answers: {
                gardenLength: {
                    key: 1,
                    label: "Length (in metres)",
                    value: null
                },
                gardenWidth: {
                    key: 2,
                    label: "Width (in metres)",
                    value: null
                }
            }
        },
        {
          text: "Do you have a shed, or other garden buildings?",
          value: null
        }
    ]
};

new Vue({
    el: '#reckoner',
    data: {
        survey: survey,
        // Store current question index
        questionIndex: 0,
        // An array initialized with "false" values for each question
        // It means: "did the user answered correctly to the question n?" "no".
        userResponses: [],
    },
    // The view will trigger these methods on click
    methods: {
        // Go to next question
        next: function() {
            this.questionIndex++;
            this.store()
        },
        // Go to previous question
        prev: function() {
            this.questionIndex--;
        },
        // Store the user's answers in a session.
        store: function() {
// // Store
        sessionStorage.setItem("gardenLength", this.userResponses);
        console.log(this.userResponses)
        console.log(sessionStorage.getItem("gardenLength"))
// // Retrieve
document.getElementById("result").innerHTML = sessionStorage.getItem("gardenLength");
        },
        // Open up a new accordion dropdown with the results in it
        showResults: function () {}
    }
});