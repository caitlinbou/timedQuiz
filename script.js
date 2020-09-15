//Object Array of 5 Questions (key/value pairs)
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
// Global Variables
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
// var question1 = questionArr[0]
// var question2 = questionArr[1]
// var question3 = questionArr[2]
// var question4 = questionArr[3]
// var question5 = questionArr[4]

// function to display the questions on the page
function showQuestion(){
    var currentQuestion = questionArr[currentQuestionIndex];
    header.textContent = currentQuestion.question;
    btnA.textContent = currentQuestion.answer[0];
    btnB.textContent = currentQuestion.answer[1];
    btnC.textContent = currentQuestion.answer[2];
    btnD.textContent = currentQuestion.answer[3];
};


btnSubmit.addEventListener("click", function(){
    showQuestion()
    message.textContent = "You got this!"
}
);

// TODO: scoring purposes
     // if text content of button selected = rightAnswer, add points, show message--answer checker 
    // function where upon click it checks if text content === answr
    // THEN show next question   
    // console.log(answerBtns);
answerBtns.forEach(function(button) {
    button.addEventListener("click", function(event){
        // console.log(event.target.textContent)
        if(event.target.textContent === questionArr[currentQuestionIndex].correctAnswer){
            score = score + 10
            message.textContent = "Correct! Current score: " + score
            if (currentQuestionIndex < 4){
                currentQuestionIndex ++
                showQuestion();
            } else {
                message.textContent = "Correct! +10pts! Thanks for playing. Your final score is: " + score
            };
        }else{
            message.textContent = "Oooh...you lose 5 seconds! Current score: " + score
            if (currentQuestionIndex < 4){
                currentQuestionIndex ++
                showQuestion();
            } else {
                message.textContent = "Not quite! Thanks for playing. Your final score is: " + score
            currentQuestionIndex ++
            showQuestion()
            };
        }
    }
    )
}
);

            

    // TODO: set TIMER with setInterval, give 1 min. Game over if timer gets to zero or if all questions are answered.
         // TODO: include in timer a loss of 5 seconds for every wrong answer
            
    //TODO: when game over show initials and score, store in local storage.





        
        
        
        
        
