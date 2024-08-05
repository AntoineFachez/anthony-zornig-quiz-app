import { quizStateMCU } from '../../data/dataMCU.js';
import { quizStateFortnite } from '../../data/dataFortnite.js';
import { quizStateProfessionalSoccer } from '../../data/dataProfessionalSoccer.js';
import { createQuestionCard } from '../questionCard/createQuestionCard.js';
import { updateProgressBar } from '../renderUIElements/progressBar.js';
import { displayResult } from './displayResult.js';

const mainSection = document.querySelector('.main-section');

export let initialGameState = { currentQuiz: 'MCU' };
let currentGameState = initialGameState;
export let currentQuizState;

export function setCurrentQuizState() {
  if (currentGameState.currentQuiz === 'MCU') {
    currentQuizState = quizStateMCU;
  } else if (currentGameState.currentQuiz === 'Fornite') {
    currentQuizState = quizStateFortnite;
  } else if (currentGameState.currentQuiz === 'professionalSoccer') {
    currentQuizState = quizStateProfessionalSoccer;
  }
}

export function renderQuiz() {
  mainSection.innerHTML = '';
  setCurrentQuizState();
  const i = currentQuizState.currentQuestionIndex;
  const item = currentQuizState.currentStateData[i];
  if (i < currentQuizState.currentStateData.length) {
    const questionCard = createQuestionCard(currentQuizState, item);

    const currentQuestionNumber = document.createElement('p');
    currentQuestionNumber.classList.add('current-question-number');

    currentQuestionNumber.textContent = `Question ${i + 1}`;
    currentQuestionNumber.setAttribute(
      'aria-label',
      currentQuestionNumber.textContent
    );

    mainSection.appendChild(questionCard);
    mainSection.appendChild(currentQuestionNumber);
    updateProgressBar(currentQuizState);
  } else {
    displayResult(mainSection, currentQuizState);
    currentQuizState.allQuestionsAnswered = true;
  }
}
