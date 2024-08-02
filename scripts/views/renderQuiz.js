import { quizState } from '../index.js';
import { createQuestionCard } from '../questionCard/createQuestionCard.js';
const mainSection = document.querySelector('.main-section');

export function renderQuiz() {
  console.log(quizState);
  mainSection.innerHTML = '';
  const i = quizState.currentQuestionIndex;
  const item = quizState.currentStateData[i];
  const questionCard = createQuestionCard(mainSection, quizState, item);

  mainSection.appendChild(questionCard);
}
