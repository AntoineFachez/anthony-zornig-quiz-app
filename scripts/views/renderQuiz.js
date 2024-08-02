import { manageDataLS, quizState } from '../../data/data.js';
import { createQuestionCard } from '../questionCard/createQuestionCard.js';
import { updateProgressBar } from '../renderUIElements/progressBar.js';
import { displayResult } from './displayResult.js';

const mainSection = document.querySelector('.main-section');

export function renderQuiz() {
  mainSection.innerHTML = '';
  const i = quizState.currentQuestionIndex;
  const item = quizState.currentStateData[i];
  if (i < quizState.currentStateData.length) {
    const questionCard = createQuestionCard(quizState, item);

    const currentQuestionNumber = document.createElement('p');
    currentQuestionNumber.classList.add('current-question-number');

    currentQuestionNumber.textContent = `Question ${i + 1}`;
    currentQuestionNumber.setAttribute(
      'aria-label',
      currentQuestionNumber.textContent
    );

    mainSection.appendChild(questionCard);
    mainSection.appendChild(currentQuestionNumber);
    updateProgressBar(quizState);
  } else {
    displayResult(mainSection, quizState);
    quizState.allQuestionsAnswered = true;
  }
}
