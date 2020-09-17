//Object Array of 5 Questions to be presented for quiz (key/value pairs)
var questionArr = [
    {
       question: "What is the main language of the web?",
       answer: ["Javascript", "HTML", "CSS", "English"],
       correctAnswer: "Javascript"
    },
    {
       question: "What is the numerical value of the first Index in an array?",
       answer: ["1", "3", "2", "0"],
       correctAnswer: "0"
    },
    {
       question: "Which variable type has a value that cannot be changed?",
       answer: ["let", "const", "var", "they can all be changed"],
       correctAnswer: "const"
    },
    {
       question: "Which set of brackets is required to create an array?",
       answer: ["( )", "{ }", "< >", "[ ]"],
       correctAnswer: "[ ]"
    },
    {
       question: "Which is the generally accepted way to define a multi-word variable in JS?",
       answer: ["multiword", "multi-word", "multiWord", "multi word"],
       correctAnswer: "multiWord"
    }
 ];
// Global Variables defined
var header = document.querySelector("header");
var btnA = document.querySelector(".btna");
var btnB = document.querySelector(".btnb");
var btnC = document.querySelector(".btnc");
var btnD = document.querySelector(".btnd");
var startBtn = document.querySelector(".startBtn");
var answerBtns = document.querySelectorAll(".answerBtn")
var currentQuestionIndex = 0
var message = document.querySelector(".message");
var score = 0
var countDown = document.querySelector(".countdown");
var secondsLeft = 30;
var intervalTimer;
var highScoresBtn = document.querySelector(".highScoresBtn"); 
var userScores = []
var scoreList = document.querySelector("#scoreList")

// hiding the multiple choice buttons prior to start of game
btnA.classList.add("hideBtn");
btnB.classList.add("hideBtn");
btnC.classList.add("hideBtn");
btnD.classList.add("hideBtn"); 

// setting and clearing timer for the start and automatic reset of the game
// prompting for initials, and storing user information into userScores array on localStorage
function setTime() {
    secondsLeft = 30
    intervalTimer = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft;

    if(secondsLeft === 0 || currentQuestionIndex === 5) {
        var initials = prompt("Game Over, final score: " + score + ". Please enter your initials for the scoreboard.")
        var user = {
        initials: initials,
        score: score
        }
        userScores.push(user)
        localStorage.setItem("userScores", JSON.stringify(userScores))

        startBtn.classList.remove("hideBtn")
    
         btnA.classList.add("hideBtn");
        btnB.classList.add("hideBtn")
        btnC.classList.add("hideBtn");
        btnD.classList.add("hideBtn");
        currentQuestionIndex = 0
        header.textContent = "Coding Quiz Challenge"
        countDown.textContent = "30 SECONDS TO PLAY"
        message.textContent = "Have Fun!!"
        score = 0
        clearInterval(intervalTimer);
    }
    }, 1000);
}
// event listener to start game and show first question
startBtn.addEventListener("click", function(){
    showQuestion()
    setTime()
    startBtn.classList.add("hideBtn")
    message.textContent = "You got this!"
    scoreList.classList.add("hideBtn")
});

// function to display the questions on the page one at a time after game initiation.
function showQuestion(){
    scoreList.classList.add("hideBtn")
    btnA.classList.remove("hideBtn");
    btnB.classList.remove("hideBtn");
    btnC.classList.remove("hideBtn");
    btnD.classList.remove("hideBtn");
    var currentQuestion = questionArr[currentQuestionIndex];
    header.textContent = currentQuestion.question;
    btnA.textContent = currentQuestion.answer[0];
    btnB.textContent = currentQuestion.answer[1];
    btnC.textContent = currentQuestion.answer[2];
    btnD.textContent = currentQuestion.answer[3];
};
// check if answer correct, increment score or decrement time accordingly, provide user messages, and show next question
answerBtns.forEach(function(button) {
    button.addEventListener("click", function(event){
        // console.log(event.target.textContent)
        if(event.target.textContent === questionArr[currentQuestionIndex].correctAnswer){
            score = score + 10
            message.textContent = "Correct! Current score: " + score
        }else{
            if (secondsLeft >= 5) {
            secondsLeft = secondsLeft - 5
            message.textContent = "Oooh...you lose 5 seconds! Current score: " + score
            }else{ 
                secondsLeft = 0;
            }
        }
        currentQuestionIndex ++
        if(currentQuestionIndex<5){
        showQuestion();
        }
    });
});
// pull high score information from localStorage to display for user
highScoresBtn.addEventListener("click", function(){
    function getLocalStorage(){
        scoreList.classList.remove("hideBtn")
        var localStorageData = JSON.parse(localStorage.getItem("userScores"))
        localStorageData.forEach(function(user){
        var pTag = document.createElement("p")
         pTag.textContent = `${user.initials} - ${user.score}`
         document.querySelector("#scoreList").appendChild(pTag)
        })
    }
        getLocalStorage()
});

    

            







        
        
        
        
        
