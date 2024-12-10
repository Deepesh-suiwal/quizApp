import data from "./question.js";
const questiondiv = document.querySelector(".question");
const options = document.querySelectorAll(".option");
const mainOption = document.querySelector("#options");
const startdiv = document.querySelector("#start");
const startdivbutton = document.querySelector("#start button");
const quizdiv = document.querySelector("#quiz");
const timer = document.querySelector(".timer")
const score = document.querySelector("#score")
let time = 5;
let useranswer = [];
let dummy = [];
let question = null
let isquestion = false;



startdivbutton.addEventListener("click", startQuiz);

options.forEach((option) => {
    option.addEventListener("click", storeUserAnswer);


});

function storeUserAnswer(e) {
    isquestion === true;
    useranswer.push(e.target.innerHTML);
    mainOption.classList.add("gayab")

    console.log(useranswer);


}
function check() {
    if (isquestion === false) {
        useranswer.push(null)
    }
}
function startQuiz() {
    startdiv.classList.add("gayab");
    quizdiv.classList.remove("gayab");
    showquestionoptions();
    startTime()
}
function showquestionoptions() {
    questiondiv.innerHTML = data[selectquestion()].q;
    options.forEach((option, index) => {
        option.innerHTML = data[question].opt[index];
    });
    mainOption.classList.remove("gayab")
}

function startTime() {
    timer.innerHTML = time
    let a = setInterval(() => {
        if (time == 1) {
            time = 5;
            timer.innerHTML = time

            if (dummy.length == 5) {
                quizdiv.classList.add("gayab");
                calculateScore()
                score.classList.remove("gayab");
                clearInterval(a)
            }
            else {

                showquestionoptions()
                check()
            }
        }
        else {
            timer.innerHTML = --time
        }
    }, 1000)
}

function calculateScore() {
    let finalScore = 0;
    useranswer.forEach((answer, index) => {
        if (answer == data[dummy[index]].a)
            finalScore++;

    });
    score.children[0].innerHTML =
        "Your score is " + finalScore + "out of " + data.length;
}

function selectquestion() {
    question = Math.floor(Math.random() * data.length);

    if (dummy.includes(question)) return selectquestion()
    else {
        console.log(question)
        dummy.push(question)
        return question
    }
}




