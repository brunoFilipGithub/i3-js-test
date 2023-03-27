class Question {
    questionText = '';
    index = 0; // not 0 based, from 1 - 4
    numberOfMaxPossibleAnswers = 0;

    answers = [];
    #results = [];

    static #generateRandomNumberOfAnswers() {
        let min = Math.ceil(2);
        let max = Math.floor(8);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    #createAnswers(numberOfAnswers) {
        console.log("nOfAnswers for question " + this.index +":" + numberOfAnswers);

        for(let i = 1; i <= numberOfAnswers; i++) {
            const answer = new Answer(i);
            this.answers.push(answer);
        }
    }

    #initQuestion() {
        const numberOfAnswers = Question.#generateRandomNumberOfAnswers();
        this.#createAnswers(numberOfAnswers);
    }

    addResult(value) {
        if(this.#results.length < this.numberOfMaxPossibleAnswers) {

            this.#results.push(value);
            return true;

        } else {
            return false;
        }
    }

    removeResult(value) {
        const result = this.#results.find(el => el == value);
        const index = this.#results.indexOf(result);
        this.#results.splice(index, 1);
    }

    getResults() {
        return this.#results;
    }

    getAnswerFromValue(value) {
        return this.answers.find( el => el.value == value);
    }

    constructor(questionText, index) {
        this.questionText = questionText;
        this.index = index

        this.numberOfMaxPossibleAnswers = 2 + (index);

        this.#initQuestion();
    }
}