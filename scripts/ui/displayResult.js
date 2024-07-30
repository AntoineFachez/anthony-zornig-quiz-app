export function displayResult(
  mainSection,
  currentsStateData,
  currentQuestion,
  correctAnswers,
  correctAnswersText
) {
  if (!correctAnswersText) {
    correctAnswersText = document.createElement('p');
  }
  console.log('dataLength', correctAnswers, currentsStateData.length);
  if (
    currentQuestion === correctAnswers &&
    correctAnswers === currentsStateData.length
  ) {
    correctAnswersText.textContent = `You answered ${correctAnswers} of ${currentQuestion} correct. You know your shit! Thanks for playing!`;
    correctAnswersText.classList.add('wow-a-winner');
  } else if (correctAnswers / currentQuestion >= 0.8) {
    // 80% or more correct
    correctAnswersText.textContent = `You answered ${correctAnswers} of ${currentQuestion} correct. Well done! Thanks for playing!`;
    correctAnswersText.classList.add('a-frequent-marvel-watcher');
  } else {
    correctAnswersText.textContent = `You answered ${correctAnswers} of ${currentQuestion} correct. Keep watching Marvel. It's worth it! Thanks for playing!`;
    correctAnswersText.classList.add('keep-on-watchin');
  }
  mainSection.appendChild(correctAnswersText);
}
