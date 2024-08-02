import { data } from '../data/data.js';
// import { createCurrentQuestion } from './questionCard/createCurrentQuestion.js';
import { createQuestionCard } from './questionCard/createQuestionCard.js';
import { updateProgressBar } from './renderUIElements/progressBar.js';
import { displayResult } from './renderUIElements/displayResult.js';
import { getBookMarkedItems } from './views/bookMarkedItems.js';
import {
  setCurrentView,
  setInitialAppState,
} from './renderUIElements/currentView.js';
import {
  initHomeButton,
  initBookMarkButton,
  initProfileButton,
} from './renderUIElements/footerButtons.js';

import { displayAllBookMarked } from './views/bookMarkedItems.js';
import { createBranchSelector } from './renderUIElements/gitBranchSelector.js';
// import { createButtonArrayCard } from './createButtonArrayCard.js';

let currentQuestionIndex = 0;

let countCorrectAnswers = 0;
let progressPercent = 0;
let correctAnswersText;
let currentStateData;
let appState = { currentView: 'quiz' };
const mainSection = document.querySelector('.main-section');
const bookmarkedArray = getBookMarkedItems();

const currentQuestionNumber = document.createElement('p');
currentQuestionNumber.classList.add('current-question-number');

const branchNames = ['main', 'features', 'ghWorkflow'];

createBranchSelector(branchNames);
document.addEventListener('DOMContentLoaded', function () {
  setCurrentView(appState);
  if (!localStorage.getItem('quizData')) {
    data;

    localStorage.setItem('quizData', JSON.stringify(data));
    currentStateData = data;
  } else {
    currentStateData = JSON.parse(localStorage.getItem('quizData'));
  }

  initHomeButton(appState);
  initBookMarkButton(appState);
  initProfileButton(appState);

  setInitialAppState(
    appState,
    mainSection,
    currentQuestionIndex,
    currentStateData,
    createButtonArrayCard,
    countCorrectAnswers,
    correctAnswersText,
    createQuestionCard,
    createCurrentQuestion,
    updateProgressBar,
    progressPercent
  );
});
document.addEventListener('click', (event) => {
  // Code to handle any click event on the document
  setCurrentView(
    appState,
    mainSection,
    currentQuestionIndex,
    currentStateData,
    createButtonArrayCard,
    countCorrectAnswers,
    correctAnswersText,
    createQuestionCard,
    createCurrentQuestion,
    updateProgressBar,
    progressPercent
  );
  console.log(appState, 'qIndex:', currentQuestionIndex);
});

export function createCurrentQuestion(
  mainSection
  // currentQuestionIndex,
  // currentStateData,
  // createButtonArrayCard,
  // countCorrectAnswers,
  // correctAnswersText,
  // createQuestionCard,
  // updateProgressBar,
  // progressPercent
) {
  mainSection.innerHTML = '';

  currentQuestionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
  currentQuestionNumber.setAttribute('aria-label', currentQuestionIndex);

  if (currentQuestionIndex < currentStateData.length) {
    const card = createQuestionCard(
      currentStateData,
      mainSection,
      currentStateData[currentQuestionIndex],
      currentQuestionIndex,
      createCurrentQuestion,
      createButtonArrayCard
    );
    mainSection.appendChild(card);
    mainSection.appendChild(currentQuestionNumber);
    currentQuestionIndex++;
    updateProgressBar(currentStateData, currentQuestionIndex, progressPercent);
  } else {
    displayResult(
      mainSection,
      currentStateData,
      currentQuestionIndex,
      countCorrectAnswers,
      correctAnswersText
    );
    allQuestionsAnswered = true;
  }
}

export function createButtonArrayCard(
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
        countCorrectAnswers++;
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
            currentQuestionIndex,
            currentStateData,
            createButtonArrayCard,
            countCorrectAnswers,
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
