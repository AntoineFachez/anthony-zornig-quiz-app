import { renderQuiz } from '../views/renderQuiz.js';

export function createButtonArrayCard(quizState, questionCard, resultText) {
  const item = quizState.currentStateData[quizState.currentQuestionIndex];
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');

  item.possibleAnswers.forEach((possibleAnswer) => {
    const multipleChoiceButton = document.createElement('button');
    multipleChoiceButton.type = 'button';

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
        quizState.countCorrectAnswers++;
      } else {
        resultText.textContent = 'Incorrect!';
      }

      questionCard.querySelectorAll('button').forEach((btn) => {
        btn.disabled = true;
      });

      quizState.currentQuestionIndex++;
      setTimeout(() => renderQuiz(), 600);
    });
    btnWrapper.appendChild(multipleChoiceButton);

    questionCard.appendChild(btnWrapper);
  });
}
