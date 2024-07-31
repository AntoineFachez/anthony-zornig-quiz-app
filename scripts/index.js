import { data } from '../data/data.js';
import { createQuestionCard } from './questionCard/createQuestionCard.js';
import { updateProgressBar } from './ui/progressBar.js';
import { displayResult } from './ui/displayResult.js';
import { getBookMarkedItems } from './views/bookMarkedItems.js';
import {
  initHomeButton,
  initBookMarkButton,
  initProfileButton,
} from './ui/footerButtons.js';

import { displayAllBookMarked } from './views/bookMarkedItems.js';
// import { createButtons } from './createButtons.js';

let currentQuestion = 0;
let correctAnswers = 0;
let progressPercent = 0;
let correctAnswersText;
let currentsStateData;
let appState = { currentView: 'quiz' };
const mainSection = document.querySelector('.main-section');

document.addEventListener('DOMContentLoaded', function () {
  setCurrentView(appState);
  const bookmarkedArray = getBookMarkedItems();
  const dataUrl = new URL('/data/questions.js', import.meta.url);
  // fetch('../data/questions.json')
  // fetch(
  //   'https://github.com/AntoineFachez/anthony-zornig-quiz-app/blob/main/data/questions.json'
  // )
  //   fetch(dataUrl)
  //     .then((response) => response.json())
  //     .then((fetchedData) => {
  //       data = fetchedData;
  //       console.log('data', data);
  if (!localStorage.getItem('quizData')) {
    data;

    localStorage.setItem('quizData', JSON.stringify(data));
    currentsStateData = data;
  } else {
    currentsStateData = JSON.parse(localStorage.getItem('quizData'));
  }
  currentsStateData?.forEach((item) => {
    const card = createQuestionCard(
      currentsStateData,
      mainSection,
      item,
      currentQuestion,
      createCurrentQuestion,
      createButtons
    );
    mainSection.appendChild(card);
  });

  initHomeButton(appState);
  initBookMarkButton(appState);
  initProfileButton(appState);

  if (appState.currentView === 'quiz') {
    createCurrentQuestion(
      mainSection,
      currentQuestion,
      currentsStateData,
      createButtons,
      correctAnswers,
      correctAnswersText,
      createQuestionCard,
      updateProgressBar,
      progressPercent
    );
  } else if (appState.currentView === 'bookmarked') {
    console.log(bookmarkedArray);
    displayAllBookMarked(
      // bookmarkedArray,
      //   mainSection,
      // currentQuestion,
      // displayCurrentQuestion,
      createButtons
    );
  } else if (appState === 'profile') {
  }
});
document.addEventListener('click', (event) => {
  // Code to handle any click event on the document
  setCurrentView(appState);
  console.log(appState);
});
export function setCurrentView(appState) {
  const currentViewIndicator = document.getElementById('current-view');
  if (currentViewIndicator) {
    currentViewIndicator.textContent = appState.currentView;
    setTimeout(() => {
      currentViewIndicator.classList.add('current-view--changed');
      currentViewIndicator.classList.remove('current-view');
    }, 0);
    setTimeout(() => {
      currentViewIndicator.classList.add('current-view');
      currentViewIndicator.classList.remove('current-view--changed');
    }, 1000);
  } else {
    console.error('current-view element not found');
  }
}
export function createCurrentQuestion() {
  mainSection.innerHTML = '';

  // correctAnswersText.classList.add('question-card--text');
  // correctAnswersText.setAttribute('aria-label', correctAnswersText);

  const currentQuestionNumber = document.createElement('p');
  currentQuestionNumber.classList.add('current-question-number');
  // currentQuestionNumber.textContent = currentQuestion + 1;

  currentQuestionNumber.textContent = `Question ${currentQuestion + 1}`;
  // currentQuestionNumber.style.transform = `translateX(${progressPercent}%)`;
  currentQuestionNumber.setAttribute('aria-label', currentQuestion);

  if (currentQuestion < currentsStateData.length) {
    const card = createQuestionCard(
      currentsStateData,
      mainSection,
      currentsStateData[currentQuestion],
      currentQuestion,
      createCurrentQuestion,
      createButtons
    );
    mainSection.appendChild(card);
    mainSection.appendChild(currentQuestionNumber);
    currentQuestion++;
    updateProgressBar(currentsStateData, currentQuestion, progressPercent);
  } else {
    displayResult(
      mainSection,
      currentsStateData,
      currentQuestion,
      correctAnswers,
      correctAnswersText
    );
    allQuestionsAnswered = true;
  }
}

export function createButtons(
  item,
  questionCard,
  createCurrentQuestion,
  resultText
) {
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');

  item.possibleAnswers.forEach((possibleAnswer) => {
    const multipleChoiceButton = document.createElement('button');
    multipleChoiceButton.textContent = possibleAnswer.possibleAnswer;
    multipleChoiceButton.classList.add('btn');
    multipleChoiceButton.classList.add('btn--multiple-choice');
    multipleChoiceButton.setAttribute(
      'aria-label',
      possibleAnswer.possibleAnswer
    );

    multipleChoiceButton.addEventListener('click', () => {
      if (possibleAnswer.possibleAnswer === item.answer) {
        resultText.textContent = 'Correct!';
        multipleChoiceButton.classList.add('btn--multiple-choice--true');
        correctAnswers++;
      } else {
        resultText.textContent = 'Incorrect!';
        multipleChoiceButton.classList.add('btn--multiple-choice--false');
      }
      questionCard.querySelectorAll('button').forEach((btn) => {
        btn.disabled = true;
      });

      setTimeout(
        () =>
          createCurrentQuestion(
            mainSection,
            currentQuestion,
            currentsStateData,
            createButtons,
            correctAnswers,
            correctAnswersText,
            createQuestionCard,
            updateProgressBar,
            progressPercent
          ),
        800
      );
    });
    btnWrapper.appendChild(multipleChoiceButton);
    questionCard.appendChild(btnWrapper);
  });
}
