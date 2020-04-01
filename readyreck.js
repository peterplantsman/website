// Canvas instructions

// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.rect(20, 20, 150, 100);
// ctx.stroke();

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
        stageOne: false,
        stageTwo: false,
        isDanger: false
    },
    mounted: function () {
        var c = document.getElementById("c");
        var ctx = c.getContext("2d");
        this.vueCanvas = ctx;
    },
    methods: {
        // Go to next question, assuming it's been answered.
        next: function () {
            let r = this.userResponses;
            if (!this.stageOne) {
                if (r[0] && r[1]) {
                    this.questionIndex++;
                    this.stageOne = true;
                    this.isDanger = false;
                    this.store();
                } else {
                    this.isDanger = true;
                }
            }

            // Question index 1.

            if (this.stageOne && !this.stageTwo) {
                this.isDanger = false;
                if (r[2]) {
                    if (r[3] && r[4]) {
                        this.questionIndex++;
                        this.stageTwo = true;
                        this.isDanger = false;
                        this.store();
                    } else {
                        this.isDanger = true;
                        // TODO: ADD MESSAGE "If sheds are selected, please enter number".
                    }
                }
            }
        },
        // Go to previous question
        prev: function () {
            this.questionIndex--;
            if (this.stageOne) {
                this.stageOne = false;
            }

            if (this.stageTwo) {
                this.stageTwo = false;
            }
        },
        skip: function () {
            this.questionIndex++;
        },
        // Store the user's answers in a session.
        store: function () {
// // Store
            sessionStorage.setItem("gardenLength", this.userResponses);
// // Retrieve
            document.getElementById("result").innerHTML = sessionStorage.getItem("gardenLength");
        },
        // Open up a new accordion dropdown with the results in it
        showResults: function () {
        }
    }
});