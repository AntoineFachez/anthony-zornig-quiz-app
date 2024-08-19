// import { initGame, createCurrentQuestion } from '../index.js';
import { renderQuiz } from './Quiz.js';
import { quizStateMCU } from '../../data/dataMCU.js';
import { quizStateFortnite } from '../../data/dataFortnite.js';
import { quizStateProfessionalSoccer } from '../../data/dataProfessionalSoccer.js';

export let initialGameState = { currentQuiz: 'fortnite' };
let currentGameState = initialGameState;
export let currentQuizState;

export function displayResult(mainSection, quizState) {
  const correctAnswersText = document.createElement('p');

  // console.log('dataLength', countCorrectAnswers, currentStateData.length);
  if (
    quizState.currentQuestionIndex === quizState.countCorrectAnswers &&
    quizState.countCorrectAnswers === quizState.currentStateData.length
  ) {
    correctAnswersText.textContent = `You answered ${quizState.countCorrectAnswers} of ${quizState.currentQuestionIndex} correct. You know your shit! Thanks for playing!`;
    correctAnswersText.classList.add('wow-a-winner');
  } else if (
    quizState.countCorrectAnswers / quizState.currentQuestionIndex >=
    0.8
  ) {
    // 80% or more correct
    correctAnswersText.textContent = `You answered ${quizState.countCorrectAnswers} of ${quizState.currentQuestionIndex} correct. Well done! Thanks for playing!`;
    correctAnswersText.classList.add('a-frequent-marvel-watcher');
  } else {
    correctAnswersText.textContent = `You answered ${quizState.countCorrectAnswers} of ${quizState.currentQuestionIndex} correct. Keep watching Marvel. It's worth it! Thanks for playing!`;
    correctAnswersText.classList.add('keep-on-watchin');
  }
  const replayButton = document.createElement('button');
  replayButton.textContent = 'Replay';

  quizState.currentQuestionIndex = 0;
  quizState.countCorrectAnswers = 0;

  replayButton.addEventListener('click', () => renderQuiz());

  mainSection.appendChild(correctAnswersText);
  mainSection.appendChild(replayButton);
}
export function setCurrentQuiz(newQuiz) {
  currentGameState.currentQuiz = newQuiz;
  setCurrentQuizState();
}

export function setCurrentQuizState() {
  if (currentGameState.currentQuiz.toLowerCase() === 'mcu') {
    currentQuizState = quizStateMCU;
  } else if (currentGameState.currentQuiz.toLowerCase() === 'fortnite') {
    currentQuizState = quizStateFortnite;
  } else if (
    currentGameState.currentQuiz.toLowerCase() === 'professionalsoccer'
  ) {
    currentQuizState = quizStateProfessionalSoccer;
  }
  return currentQuizState;
}
export function getCurrentQuizState() {
  setCurrentQuizState();
  return currentQuizState;
}
