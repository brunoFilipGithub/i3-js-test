var questions = [];
var activeQuestion;
const sidebarSlides = Array.from(slides);

function areAllQuestionsAnswered() {
    nOfQuestionsAnswered = 0;

    questions.forEach(el => {
        if(el.getResults().length > 0){
            nOfQuestionsAnswered++;
        } 
    });

    console.log(nOfQuestionsAnswered);
    if(nOfQuestionsAnswered == 4){
        return true;
    } else return false;
}

function showResults() {
    let results = []
    questions.forEach(el => {
        results.push("Question " + el.index + ": &nbsp;&nbsp;" + el.getResults() + "<br>"); // &nbsp; = space
    });

    console.log(results);

    const modal = new Modal("Results", results);
}

function manageButtonsDisplay() {
    // question index is not 0 based, first index value is 1
    if(activeQuestion.index == 1) {
        prevButton.style.display = "none";
        buttons.style.justifyContent = "end";
    } else {
        prevButton.style.display = "inline-block";
        buttons.style.justifyContent = "space-between";
    }

    if(activeQuestion.index == (questions.indexOf(questions[questions.length - 1])) + 1) {
        nextButton.style.display = "none";
        showResultsButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        showResultsButton.style.display = "none";
    }
}

function selectQuestion(id) {

    // is activeQuestion initialized or is it undefined(first time)
    if(activeQuestion) {
        const previousActiveSlide = sidebarSlides.find(el => el.classList.contains('selectedSlide'));
        previousActiveSlide.classList.remove('selectedSlide');

        if(menuButton.classList.contains('open')) {
            hideMobileSidebar();
        }
    }

    activeQuestion = questions[id-1];
    questionArea.innerHTML = activeQuestion.questionText;

    const x = sidebarSlides.find(el => el.id == id);
    x.classList.add('selectedSlide');
    
    manageButtonsDisplay();
    loadAnswers();
}

function initQuestions() {
    questions.push(new Question("What is the name of the tallest mountain in the world?", questions.length + 1));
    questions.push(new Question("Who won the first nobel prize?", questions.length + 1));
    questions.push(new Question("Who was the richest person in history?", questions.length + 1));
    questions.push(new Question("How long do penguins live?", questions.length + 1));
    showResultsButton.disabled = true;
}

function entryPoint() {
    
    initQuestions();
    selectQuestion(1);

    // ------------------------------- event listeners ---------------------------------------------------
    prevButton.addEventListener('click', function() { selectQuestion(activeQuestion.index - 1); });
    nextButton.addEventListener('click', function() { selectQuestion(activeQuestion.index + 1); });
    showResultsButton.addEventListener('click', showResults);
    menuButton.addEventListener('click', toggleMenu);
    
    overlay.addEventListener('click', function(event) { removeOverlay(event); });
    
    window.addEventListener('resize', function(event) {
        if(menuButton.classList.contains('open')) {
            sidebar.style.display = "none";
            sidebar.style.transform = "";

            overlay.replaceChildren();
            overlay.remove();
            menuButton.style.transform = "";
            menuButton.classList.remove('open');
        }
    }, true);
    // ---------------------------------------------------------------------------------------------------
}



entryPoint();




