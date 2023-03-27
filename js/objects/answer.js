class Answer {

    answerHTMLElement;
    value = 0;

    isSelected() {
        if(this.answerHTMLElement.classList.contains('answer-selected')) {
            return true;
        } else {
            return false;
        }
    }

    constructor(value) {
        this.value = value;
        
        this.answerHTMLElement = document.createElement('div');
        this.answerHTMLElement.className = "answer";
        this.answerHTMLElement.innerHTML = value;
    }
}