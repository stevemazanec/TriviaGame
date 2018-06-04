$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeRemaining;
    var quizTimer;
    function endGame(){
        $("#beatlesQuiz").hide();
        $("#results").show();
        checkAnswers();
        $("#correctAnswers").text(correct);
        $("#incorrectAnswers").text(incorrect);
        $("#questionsUnanswered").text(unanswered);
    }
    function checkAnswers(){
        if ($('input[type="radio"][name=answer1]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer1]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer1]:checked').val()) {
            unanswered++;
        }

        if ($('input[type="radio"][name=answer2]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer2]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer2]:checked').val()) {
            unanswered++;
        }

        if ($('input[type="radio"][name=answer3]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer3]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer3]:checked').val()) {
            unanswered++;
        }

        if ($('input[type="radio"][name=answer4]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer4]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer4]:checked').val()) {
            unanswered++;
        }

        if ($('input[type="radio"][name=answer5]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer5]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer5]:checked').val()) {
            unanswered++;
        }

        if ($('input[type="radio"][name=answer6]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer6]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer6]:checked').val()) {
            unanswered++;
        }

        if ($('input[type="radio"][name=answer7]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer7]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer7]:checked').val()) {
            unanswered++;
        }

        if ($('input[type="radio"][name=answer8]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer8]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer8]:checked').val()) {
            unanswered++;
        }

        if ($('input[type="radio"][name=answer9]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer9]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer9]:checked').val()) {
            unanswered++;
        }

        if ($('input[type="radio"][name=answer10]:checked').val() == "rightanswer") {
            correct++;
        }
        else if ($('input[type="radio"][name=answer10]:checked').val() == "wronganswer") {
            incorrect++;
        }
        else if (!$('input[type="radio"][name=answer10]:checked').val()) {
            unanswered++;
        }
    };
    function resetGame(){
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        $("#results").hide();
        $("#beatlesQuiz").show();
        $('.form-check-input').prop('checked', false);
         timeRemaining = 120;
         quizTimer = setInterval(function(){
            timeRemaining--;
            $("#countDown").text(timeRemaining);
            if(timeRemaining <= 0){
                clearInterval(quizTimer);
                endGame();
            };
        }, 1000)
    }
    $("#beatlesQuiz,#results").hide();
    $("#startButton").click(function(){
        $("#startGame").hide();
        $("#beatlesQuiz").show();
         timeRemaining = 120;
         quizTimer = setInterval(function(){
            timeRemaining--;
            $("#countDown").text(timeRemaining);
            if(timeRemaining <= 0){
                endGame();
            };
        }, 1000)
    });
    $("#endButton").click(function endGame(){
        clearInterval(quizTimer);
        $("#countDown").text("120");
        $("#beatlesQuiz").hide();
        $("#results").show();
        checkAnswers();
        $("#correctAnswers").text(correct);
        $("#incorrectAnswers").text(incorrect);
        $("#questionsUnanswered").text(unanswered);
    });
    $("#restartButton").click(function(){
        resetGame();
    })
});