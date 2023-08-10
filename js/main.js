  function openAns(answerId) {
        var answerDiv = document.getElementById(answerId);
        if (answerDiv.style.display === "block") {
            answerDiv.style.display = "none";
        } else {
            answerDiv.style.display = "block";
        }
    }
