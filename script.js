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
var btnSubmit = document.querySelector(".btnSubmit");
var answerBtns = document.querySelectorAll(".answerBtn")
var currentQuestionIndex = 0
var message = document.querySelector(".message");
var score = 0
var countDown = document.querySelector(".countdown");
var secondsLeft = 30;
var intervalTimer;
var highScores = document.querySelector(".highScores"); 
var scores = {
    initials: "",
    score: ""
}
highScores = scores;
// answerBtns.classList.add("hideBtn")
// hiding the multiple choice buttons prior to start of game
btnA.style.display = "none";
btnB.style.display = "none";
btnC.style.display = "none";
btnD.style.display = "none"; 

// setting and clearing timer for the start and automatic reset of the game
function setTime() {
    secondsLeft = 30
    intervalTimer = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft;

    if(secondsLeft === 0 || currentQuestionIndex === 5) {
      var initials = prompt("Game Over, final score: " + score + ". Please enter your initials for the scoreboard.")
      document.querySelector("#scoreList").textContent = "High Scores: " + initials + "," + " " + "score:" + " " + score;
    //   localStorage.setItem("quizScores", JSON.stringify(score));
      btnSubmit.classList.remove("hideBtn")
    //   answerBtns.classList.add("hideBtn")
      btnA.style.display = "none";
      btnB.style.display = "none";
      btnC.style.display = "none";
      btnD.style.display = "none";
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
btnSubmit.addEventListener("click", function(){
    showQuestion()
    setTime()
    btnSubmit.classList.add("hideBtn")
    message.textContent = "You got this!"
});

// function to display the questions on the page one at a time after game initiation
function showQuestion(){
    // answerBtns.classList.remove("hideBtn")
    btnA.style.display = "inline-block";
    btnB.style.display = "inline-block";
    btnC.style.display = "inline-block";
    btnD.style.display = "inline-block";
    var currentQuestion = questionArr[currentQuestionIndex];
    header.textContent = currentQuestion.question;
    btnA.textContent = currentQuestion.answer[0];
    btnB.textContent = currentQuestion.answer[1];
    btnC.textContent = currentQuestion.answer[2];
    btnD.textContent = currentQuestion.answer[3];
};

answerBtns.forEach(function(button) {
    button.addEventListener("click", function(event){
        // console.log(event.target.textContent)
        if(event.target.textContent === questionArr[currentQuestionIndex].correctAnswer){
            score = score + 10
            message.textContent = "Correct! Current score: " + score
        }else{
            secondsLeft = secondsLeft - 5
            message.textContent = "Oooh...you lose 5 seconds! Current score: " + score
        }
        currentQuestionIndex ++
        if(currentQuestionIndex<5){
        showQuestion();
        }
    });
});

// highScores.addEventListener("click", function(){
    localStorage.setItem("");
    highScores = localStorage.getItem()

    

// });

// score.push({})          
            
            

// TODO: when game over show initials input and final score, store in local storage.
    // TODO: HOW DO I STORE THE PROMPT ANSWER and score
    

            







        
        
        
        
        
