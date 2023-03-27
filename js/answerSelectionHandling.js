function toggleSelectedAnswer(answer) {

    if(answer.answerHTMLElement.classList.contains('answer-selected')) {

        answer.answerHTMLElement.classList.remove('answer-selected');
        activeQuestion.removeResult(answer.value);
        loadAnswers();

    } else {
        if(activeQuestion.addResult(answer.value)) {
            answer.answerHTMLElement.classList.add('answer-selected');
            loadAnswers();
        } else {
            const modal = new Modal("Answer selection problem", "You have already selected a maximum number of answers for this question!"); 
            
            setTimeout( function() {
                modal.hideModal();
            }, 2700);
        }
    }
}

function selectAnswer(value) {  
    const answer = activeQuestion.getAnswerFromValue(value);
    toggleSelectedAnswer(answer);
}

function loadAnswers() {
    if(areAllQuestionsAnswered()) {
        showResultsButton.disabled = false;
    } else {
        showResultsButton.disabled = true;
    }

    answersArea.replaceChildren();

    let HTML_entityCodeValueForLetterBeforeQuestion = 65; // initial value is letter "A"
    const HTML_entityForClosingBracket = "&#41;";

    activeQuestion.answers.forEach(answer => {

        HTML_entityCodeForLetterBeforeQuestion = "&#" + HTML_entityCodeValueForLetterBeforeQuestion + ";";
        HTML_entityCodeValueForLetterBeforeQuestion += 1;
        
        const answerWrapper = document.createElement('div');
        answerWrapper.className = "answer-wrapper";
        answerWrapper.innerHTML = "<p>" + HTML_entityCodeForLetterBeforeQuestion + HTML_entityForClosingBracket + answer.answerHTMLElement.outerHTML;
        answersArea.appendChild(answerWrapper);
    });

    Array.from(answerElements).forEach(ans => {
        ans.addEventListener('click', function() { selectAnswer(ans.innerHTML) });
    });
}