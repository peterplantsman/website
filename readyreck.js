// Canvas instructions

// // Store
// sessionStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("result").innerHTML = sessionStorage.getItem("lastname");


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

            text: "Question 1",
        }, {
            text: "Question 2",

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
        userResponses: Array(survey.questions.length).fill(false)
    },
    // The view will trigger these methods on click
    methods: {
        // Go to next question
        next: function() {
            this.questionIndex++;
        },
        // Go to previous question
        prev: function() {
            this.questionIndex--;
        },
        // Return "true" count in userResponses
        score: function() {
            return this.userResponses.filter(function(val) { return val }).length;
        }
    }
});