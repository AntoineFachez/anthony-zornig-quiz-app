export function createCurrentQuestion(
  mainSection,
  currentQuestion,
  currentsStateData,
  createButtons,
  correctAnswers,
  correctAnswersText,
  createQuestionCard,
  updateProgressBar,
  progressPercent
) {
  mainSection.innerHTML = '';

  // correctAnswersText.classList.add('question-card--text');
  // correctAnswersText.setAttribute('aria-label', correctAnswersText);

  const currentQuestionNumber = document.createElement('p');
  currentQuestionNumber.classList.add('current-question-number');
  // currentQuestionNumber.textContent = `Questions ${currentQuestion + 1}`;
  currentQuestionNumber.textContent = `${currentQuestion + 1}`;
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
    // mainSection.appendChild(currentQuestionNumber);
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
