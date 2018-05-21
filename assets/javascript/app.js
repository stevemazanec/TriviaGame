$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
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
    $("#beatlesQuiz,#results").hide();
    $("#startButton").click(function(){
        $("#startGame").hide();
        $("#beatlesQuiz").show();
        var timeRemaining = 120;
        var quizTimer = setInterval(function(){
            timeRemaining--;
            $("#countDown").text(timeRemaining);
            if(timeRemaining <= 0){
                clearInterval(quizTimer);
                endGame();
            };
        }, 1000)
    });
    $("#endButton").click(function endGame(){
        $("#beatlesQuiz").hide();
        $("#results").show();
        checkAnswers();
        $("#correctAnswers").text(correct);
        $("#incorrectAnswers").text(incorrect);
        $("#questionsUnanswered").text(unanswered);
    });
});