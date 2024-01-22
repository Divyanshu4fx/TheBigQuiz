const ques_el = document.getElementById("question")
const resultel = document.getElementById("result")
const button1 = document.getElementById("Op1")
const button2 = document.getElementById("Op2")
const button3 = document.getElementById("Op3")
const button4 = document.getElementById("Op4")
const scrtbl = document.getElementById("Score_table")
const user = document.getElementById("login")
const next_btn = document.getElementById("Next")
const skip_btn = document.getElementById("Skip")
let user_name = localStorage.getItem("User_name")
let topic = localStorage.getItem("topic")
let answer = 0
let answer_btn = null
let Submitflag = 0
let Qcount = 0
let Score = 0
var timerElement = document.getElementById("timer");
var timeInSeconds = 60;
var timerInterval = null

let spaceQuestions = []
fetch('Question.json')
    .then(response => response.json())
    .then(data => {
        spaceQuestions = data[topic];
        RenderQ()
        userName()
    });

function ShowScore() {
    let ShowScore_el = document.getElementById("ShowScore")
    ShowScore_el.innerHTML = `<p>Score:${Score}/20</p>`
}
function Submit() {
    let Submit_btn = document.getElementById("control")
    if (Submitflag == 0) {
        Submit_btn.innerHTML += `<button id="Submit" onclick="gotoscore()" >Submit</button>`
        Submitflag = 1
    }
    localStorage.setItem("Score",`${Score}`)
}
function userName() {
    user.innerHTML += `<p><img src="User.png">Welcome ${user_name}</p>`
}

function updateTimer() {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = timeInSeconds % 60;

    var formattedMinutes = minutes.toString().padStart(2, "0");
    var formattedSeconds = seconds.toString().padStart(2, "0");

    timerElement.textContent = formattedMinutes + ":" + formattedSeconds;

    timeInSeconds--;

    if (timeInSeconds < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00";
        Evaluate(answer, 1)
        skip_btn.disabled = true
    }
}

function StartTimer() {
    clearInterval(timerInterval)
    timeInSeconds = 60
    timerInterval = setInterval(updateTimer, 1000);
}
function RenderQ() {
    if (Qcount >= 20) {
        skip_btn.disabled = true;
        clearInterval(timerInterval)
        Submit()
        return
    }
    ques = "Q" + (Qcount + 1) + "." + spaceQuestions[Qcount].question
    ques_el.textContent = ques
    op1 = spaceQuestions[Qcount].options[0]
    op2 = spaceQuestions[Qcount].options[1]
    op3 = spaceQuestions[Qcount].options[2]
    op4 = spaceQuestions[Qcount].options[3]
    button1.textContent = op1
    button2.textContent = op2
    button3.textContent = op3
    button4.textContent = op4
    answer = spaceQuestions[Qcount].answer
    Qcount++
    button1.style.backgroundColor = "rgb(0 125 220)"
    button1.style.color = "white"
    button2.style.backgroundColor = "rgb(0 125 220)"
    button2.style.color = "white"
    button3.style.backgroundColor = "rgb(0 125 220)"
    button3.style.color = "white"
    button4.style.backgroundColor = "rgb(0 125 220)"
    button4.style.color = "white"
    resultel.innerHTML = `<p></p>`
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    next_btn.disabled = true;
    skip_btn.disabled = false
    StartTimer()
}
function Evaluate(result, a = 0) {
    let str = "Op" + result
    const buttonclicked = document.getElementById(str)
    switch (answer) {
        case 1:
            answer_btn = button1
            break
        case 2:
            answer_btn = button2
            break
        case 3:
            answer_btn = button3
            break
        case 4:
            answer_btn = button4
            break
    }
    if (result === answer) {
        button1.style.backgroundColor = "transparent"
        button1.style.color = "rgb(0 125 220)"
        button2.style.backgroundColor = "transparent"
        button2.style.color = "rgb(0 125 220)"
        button3.style.backgroundColor = "transparent"
        button3.style.color = "rgb(0 125 220)"
        button4.style.backgroundColor = "transparent"
        button4.style.color = "rgb(0 125 220)"
        answer_btn.style.backgroundColor = "rgb(30, 161, 30)"
        answer_btn.style.color = "white"
        if (a == 0) {
            resultel.innerHTML = `<p class="good">Congratulations! You chose the correct answer. Well done!</p>`
            scrtbl.innerHTML += `<tr><td class="Q">Q-${Qcount}</td><td class="stat" style="color: green;">Correct</td></tr>`
            Score++;
        }
        else {
            resultel.innerHTML = `<p style="color: red;">Time Up!!!</p>`
            scrtbl.innerHTML += `<tr><td class="Q">Q-${Qcount}</td><td class="stat" style="color: blue;">Not Attempted</td></tr>`
        }
    }
    else {
        button1.style.backgroundColor = "transparent"
        button1.style.color = "rgb(0 125 220)"
        button2.style.backgroundColor = "transparent"
        button2.style.color = "rgb(0 125 220)"
        button3.style.backgroundColor = "transparent"
        button3.style.color = "rgb(0 125 220)"
        button4.style.backgroundColor = "transparent"
        button4.style.color = "rgb(0 125 220)"
        buttonclicked.style.backgroundColor = "red"
        buttonclicked.style.color = "white"
        answer_btn.style.backgroundColor = "rgb(30, 161, 30)"
        answer_btn.style.color = "white"
        resultel.innerHTML = `<p class="wrong">Oops! That's not the correct answer.</p>`
        scrtbl.innerHTML += `<tr><td class="Q">Q-${Qcount}</td><td class="stat" style="color: red;">Wrong</td></tr>`
    }
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    next_btn.disabled = false;
    skip_btn.disabled = true;
    clearInterval(timerInterval)
}
function Skip() {
    scrtbl.innerHTML += `<tr><td class="Q">Q-${Qcount}</td><td class="stat" style="color: red;">Skipped</td></tr>`
    console.log("U:" + Qcount)
    RenderQ()
}

function gotoscore(){
    window.location.href="scorecard.html"
}


