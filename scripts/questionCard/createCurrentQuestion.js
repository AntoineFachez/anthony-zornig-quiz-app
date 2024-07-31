import { createQuestionCard } from './createQuestionCard.js';

export function createCurrentQuestion(
  mainSection,
  currentQuestionIndex,
  currentStateData,
  createButtonArrayCard,
  countCorrectAnswers,
  correctAnswersText,
  createQuestionCard,
  updateProgressBar,
  progressPercent
) {
  mainSection.innerHTML = '';

  const currentQuestionNumber = document.createElement('p');
  currentQuestionNumber.classList.add('current-question-number');

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
