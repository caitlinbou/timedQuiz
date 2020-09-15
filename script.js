//Object Array of 5 Questions (key/value pairs)
var questionArr = [
    {
       question: "What is the main language of the web?",
       answer: {0: "Javascript", 1: "HTML", 2: "CSS", 3: "English"},
       correctAnswer: 0
    },
    {
       question: "What is the numerical value of the first Index in an array?",
       answer: {0: "1", 1: "3", 2: "2", 3: "0"},
       correctAnswer: 3
    },
    {
       question: "Which variable type has a value that cannot be changed?",
       answer: {0: "let", 1: "const", 2: "var", 3: "they can all be changed"},
       correctAnswer: 1
    },
    {
       question: "Which set of brackets is required to create an array?",
       answer: {0: "( )", 1: "{ }", 2: "< >", 3: "[ ]"},
       correctAnswer: 3
    },
    {
       question: "Which is the generally accepted way to define a multi-word variable in JS?",
       answer: {0: "multiword", 1: "multi-word", 2: "multiWord", 3: "multi word"},
       correctAnswer: 2
    }
 ];

var header = document.querySelector("header");
var btnA = document.querySelector(".btna");
var btnB = document.querySelector(".btnb");
var btnC = document.querySelector(".btnc");
var btnD = document.querySelector(".btnd");
var btnSubmit = document.querySelector(".btnSubmit");
// var question1 = questionArr[0]
// var question2 = questionArr[1]
// var question3 = questionArr[2]
// var question4 = questionArr[3]
// var question5 = questionArr[4]

function showQuestion(){
    var currentQuestionIndex = 0
    var currentQuestion = questionArr[currentQuestionIndex];
    var correctAnswer = currentQuestion.correctAnswer;
    header.textContent = currentQuestion.question;
    btnA.textContent = currentQuestion.answer[0];
    btnB.textContent = currentQuestion.answer[1];
    btnC.textContent = currentQuestion.answer[2];
    btnD.textContent = currentQuestion.answer[3];
    
}
showQuestion()
    // TODO: figure out how to set correct answer so that the messsages (SEE BELOW) will properly populate
  
// TODO: work on click event for a) correct answer b) moving on to next question c) scoring purposes
    document.querySelector(".answerBtn").addEventListener("click", function(){
    if (currentQuestionIndex < questionArr.length) {
        currentQuestionIndex ++
        showQuestion()
    } else {
        var message = document.createElement("p");
        document.querySelector(".message").appendChild(message);
        message.textContent = "Game over, your score is: "
    }
}
);
    


    // TODO: set TIMER with setInterval-give 30 sec or 1 min
    // TODO: set SCORES and high score storage.   
            
        // if a) all questions answered or b) timer zero then show game over
        // when game over show initials and score...to remain when refreshed.


        // var message = document.createElement("p");
        //         document.querySelector(".message").appendChild(message);
                
        //         if (correctAnswer){
        //             message.textContent = "CORRECT! +10 Points!"
        //         } else {
        //              message.textContent = "Incorrect, you have lost 5 seconds!"
        //         }



        
        
        
        
        
