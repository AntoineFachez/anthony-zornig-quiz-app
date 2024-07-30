import { data } from './data.js';
import { updateProgressBar } from './progressBar.js';
// import { createQuestionCard } from './createQuestionCard.js';

let currentQuestion = 0;
let correctAnswers = 0;
let correctAnswersText;
const mainSection = document.querySelector('.main-section');

document.addEventListener('DOMContentLoaded', function () {
  const dataUrl = new URL('/data/questions.js', import.meta.url);
  // fetch('../data/questions.json')
  // fetch(
  //   'https://github.com/AntoineFachez/anthony-zornig-quiz-app/blob/main/data/questions.json'
  // )
  //   fetch(dataUrl)
  //     .then((response) => response.json())
  //     .then((fetchedData) => {
  //       data = fetchedData;
  //       console.log('data', data);
  data?.forEach((item) => {
    const card = createQuestionCard(item, currentQuestion);
    mainSection.appendChild(card);
  });
  displayCurrentQuestion();
});

export function displayCurrentQuestion() {
  mainSection.innerHTML = '';

  if (!correctAnswersText) {
    correctAnswersText = document.createElement('p');
  }
  correctAnswersText.textContent = correctAnswers;
  // correctAnswersText.classList.add('question-card--text');
  // correctAnswersText.setAttribute('aria-label', correctAnswersText);

  const currentQuestionNumber = document.createElement('p');
  currentQuestionNumber.textContent = currentQuestion;
  currentQuestionNumber.setAttribute('aria-label', currentQuestion);
  if (currentQuestion < data.length) {
    const card = createQuestionCard(data[currentQuestion], currentQuestion);
    mainSection.appendChild(card);
    currentQuestion++;
    updateProgressBar(data, currentQuestion);
    console.log(correctAnswers);
  } else {
    displayResult();
    allQuestionsAnswered = true;
  }
}
export function displayResult() {
  mainSection.appendChild(correctAnswersText);
}
export function createQuestionCard(item) {
  const questionCard = document.createElement('section');
  questionCard.classList.add('question-card');

  const bookmarkDiv = document.createElement('div');
  bookmarkDiv.classList.add('bookmark');

  if (item.imgUrl && item.imgAlt) {
    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = item.alt;
    img.classList.add('question-card--image'); // Optional class for styling
    mainSection.appendChild(img); // Add the image to the card
  }

  const questionText = document.createElement('p');
  questionText.textContent = item.question;
  questionText.classList.add('question-card--text');
  questionText.setAttribute('aria-label', questionText);

  const showAnswerButton = document.createElement('button');
  showAnswerButton.textContent = 'cheat';
  showAnswerButton.setAttribute(
    'aria-label',
    'Show answer for question ' + currentQuestion
  );
  showAnswerButton.classList.add('btn');
  showAnswerButton.classList.add('btn--show-answer');
  showAnswerButton.addEventListener('click', () => {
    questionText.textContent = item.answer;
    showAnswerButton.disabled = true;
  });

  const resultText = document.createElement('p');
  resultText.setAttribute('aria-label', resultText);

  questionCard.appendChild(questionText);
  questionCard.appendChild(resultText);
  const btnWrapper = createButtons(item, questionCard, resultText);
  questionCard.appendChild(bookmarkDiv);
  questionCard.appendChild(showAnswerButton);

  return questionCard;
}
export function createButtons(item, questionCard, resultText) {
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');

  item.possibleAnswers.forEach((possibleAnswer) => {
    const multipleChoiceButton = document.createElement('button');
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
        correctAnswers++;
      } else {
        resultText.textContent = 'Incorrect!';
      }

      questionCard.querySelectorAll('button').forEach((btn) => {
        btn.disabled = true;
      });
      setTimeout(displayCurrentQuestion, 1000);
    });
    btnWrapper.appendChild(multipleChoiceButton);

    questionCard.appendChild(btnWrapper);
  });
}
