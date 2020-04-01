// The survey variable

let survey = {
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
        isDanger: false,
        vueCanvas: null,
    },
    mounted: function () {
        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");
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
                        this.drawRect();
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
            this.drawRect();
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
        },
        drawRect: function () {
            // Define size of canvas
            let c = document.getElementById("canvas");

            // TODO: Change the height and width by incorporating the x/y coords. eg.
            c.width = this.userResponses[1]*100 + 30;
            c.height = this.userResponses[0]*100 + 30;
            // clear canvas
            // this.vueCanvas.clearRect(0, 0, 400, 200);

            // draw rect
            this.vueCanvas.beginPath();
            this.vueCanvas.fillStyle = "darkGreen";
            this.vueCanvas.fillRect(20, 20, this.userResponses[1]*100, this.userResponses[0]*100);

            for (let i = 0; i < this.userResponses[2]; i++) {
                this.vueCanvas.beginPath();
                this.vueCanvas.fillStyle = "brown";
                this.vueCanvas.fillRect(40, 30, this.userResponses[3]*100, this.userResponses[4]*100);
            }

            this.vueCanvas.stroke();
        }
    }
});