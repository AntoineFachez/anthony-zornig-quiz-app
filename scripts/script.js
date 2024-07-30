const questionCard = document.querySelector('.question-card p');
const showAnswerButton = document.querySelector('.question-card button');
let data;

document.addEventListener('DOMContentLoaded', function () {
  // fetch(
  //   'https://github.com/AntoineFachez/anthony-zornig-quiz-app/blob/main/data/questions.json'
  // )
  fetch('/data/questions.json')
    .then((response) => response.json())
    .then((fetchedData) => {
      data = fetchedData;
      console.log(data);
      data?.forEach((item) => {
        const card = createQuestionCard(item);
        mainSection.appendChild(card);
      });
    });
  console.log(data);
});
let currentQuestion = 0;

const mainSection = document.querySelector('.main-section');

function createQuestionCard(item) {
  const questionCard = document.createElement('section');
  questionCard.classList.add('question-card');

  const bookmarkDiv = document.createElement('div');
  bookmarkDiv.classList.add('bookmark');

  const questionText = document.createElement('p');
  questionText.textContent = item.question;

  const showAnswerButton = document.createElement('button');
  showAnswerButton.textContent = 'Show Answer';
  showAnswerButton.addEventListener('click', () => {
    questionText.textContent = item.answer;
    showAnswerButton.disabled = true;
  });

  questionCard.appendChild(questionText);
  questionCard.appendChild(bookmarkDiv);

  item.possibleAnswers.forEach((possibleAnswer) => {
    const multipleChoiceButton = document.createElement('button');
    multipleChoiceButton.textContent = possibleAnswer.possibleAnswer;
    multipleChoiceButton.classList.add('multiple-choice');
    multipleChoiceButton.addEventListener('click', () => {
      if (possibleAnswer.possibleAnswer === item.answer) {
        questionText.textContent = 'Correct!';
      } else {
        questionText.textContent = 'Incorrect!';
      }

      questionCard
        .querySelectorAll('button')
        .forEach((btn) => (btn.disabled = true));
    });

    questionCard.appendChild(multipleChoiceButton);
  });

  questionCard.appendChild(showAnswerButton);

  return questionCard;
}
