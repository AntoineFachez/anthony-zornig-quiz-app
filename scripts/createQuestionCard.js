export function createQuestionCard(item, currentQuestion) {
  const questionCard = document.createElement('section');
  questionCard.classList.add('question-card');

  const bookmarkDiv = document.createElement('div');
  bookmarkDiv.classList.add('bookmark');

  const questionText = document.createElement('p');
  questionText.textContent = item.question;
  questionText.classList.add('question-card--text');
  questionText.setAttribute('aria-label', questionText);

  // const btnWrapper = document.createElement('div');

  const showAnswerButton = document.createElement('button');
  showAnswerButton.textContent = 'Show Answer';
  showAnswerButton.setAttribute(
    'aria-label',
    'Show answer for question ' + currentQuestion
  );
  showAnswerButton.addEventListener('click', () => {
    questionText.textContent = item.answer;
    showAnswerButton.disabled = true;
  });
  const resultText = document.createElement('p');
  const btnWrapper = createButtons(item, questionCard, resultText);
  resultText.setAttribute('aria-label', resultText);

  questionCard.appendChild(questionText);
  questionCard.appendChild(resultText);
  questionCard.appendChild(bookmarkDiv);
  questionCard.appendChild(showAnswerButton);

  return questionCard;
}
