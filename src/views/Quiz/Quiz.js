// import { quizStateMCU } from '../../data/dataMCU.js';
// import { quizStateFortnite } from '../../data/dataFortnite.js';
// import { quizStateProfessionalSoccer } from '../../data/dataProfessionalSoccer.js';
import { createQuestionCard } from '../../questionCard/createQuestionCard.js';
import { updateProgressBar } from '../../renderUIElements/progressBar.js';
import { displayResult, getCurrentQuizState } from './quizHelpers.js';

// export let initialGameState = { currentQuiz: 'fortnite' };
// let currentGameState = initialGameState;
// export let currentQuizState;

// export function setCurrentQuiz(newQuiz) {
//   currentGameState.currentQuiz = newQuiz;
//   setCurrentQuizState();
// }

// export function setCurrentQuizState() {
//   if (currentGameState.currentQuiz.toLowerCase() === 'mcu') {
//     currentQuizState = quizStateMCU;
//   } else if (currentGameState.currentQuiz.toLowerCase() === 'fortnite') {
//     currentQuizState = quizStateFortnite;
//   } else if (
//     currentGameState.currentQuiz.toLowerCase() === 'professionalsoccer'
//   ) {
//     currentQuizState = quizStateProfessionalSoccer;
//   }
//   return currentQuizState;
// }
// export function getCurrentQuizState() {
//   setCurrentQuizState();
//   return currentQuizState;
// }

export function renderQuiz(htmlObjects, currentQuizState) {
  htmlObjects.main.innerHTML = '';
  const currentQuiz = getCurrentQuizState();
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
    htmlObjects.main.appendChild(questionCard);
    htmlObjects.main.appendChild(currentQuestionNumber);
    updateProgressBar(currentQuizState);
  } else {
    displayResult(htmlObjects, currentQuizState);
    currentQuizState.allQuestionsAnswered = true;
  }
}
