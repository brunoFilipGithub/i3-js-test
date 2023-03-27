const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementsByClassName('sidebar')[0];
const slides = document.getElementsByClassName('slide');
const questionArea = document.getElementById('question');
const answersArea = document.getElementsByClassName('answers-area')[0];
const buttons = document.getElementsByClassName('buttons')[0];
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const showResultsButton = document.getElementById('showResultsButton');

var answerElements = document.getElementsByClassName('answer');;

var overlay = document.createElement('div');
overlay.className = "overlay";

function removeOverlay(e) {
    console.log(e.target)
    if(e.target.classList.contains("overlay")) {
        overlay.replaceChildren();
        overlay.remove();
    }
}