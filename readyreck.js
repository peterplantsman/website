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
            text: "Please enter the dimensions of your garden space. " +
                "Think of the space as roughly being a rectangle or square.",
            answers: {
                gardenLength: {
                    key: 0,
                    label: "Length (in metres)",
                    value: null
                },
                gardenWidth: {
                    key: 1,
                    label: "Width (in metres)",
                    value: null
                }
            }
        },
        {
          text: "Do you have a shed, or other garden buildings?",
            answers: {
                possess: {
                    key: 2,
                    label: "Number of sheds/garden buildings",
                    value: null
                },
                shedLength: {
                  key: 3,
                    label: "Length (in metres)",
                    value: null
                },
                shedWidth: {
                  key: 4,
                    label: "Width (in metres)",
                    value: null
                }
            },
        }
    ]
};

new Vue({
    el: '#reckoner',
    data: {
        survey: survey,
        questionIndex: 0,
        userResponses: [],
        stageOne: null,
        stageTwo: null,
        isDanger: false
    },

    methods: {
        // Go to next question, assuming it's been answered.
        next: function() {
            let r = this.userResponses;
                if (r[0] && r[1]) {
                    this.questionIndex++;
                    this.stageOne = true;
                    this.isDanger = false;
                    this.store();
                } else if (!this.stageOne && !r[0] && !r[1]) {
                    this.isDanger = true;
                }

                if (this.stageOne) {
                    r[2] = "Not Set";
                }

                if (this.stageOne && r[2] && r[3] && r[4]) {
                    console.log(r[3])
                    console.log(r[4])
                    this.questionIndex++;
                    this.stageTwo = true;
                    this.isDanger = false;
                    this.store();
                } else if (!this.stageTwo && (r[2] != "Not Set")) {
                    this.isDanger = true;
                    r[2] = null;
                }

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