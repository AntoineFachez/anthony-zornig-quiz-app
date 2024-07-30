import { data } from './data.js';
import { updateProgressBar } from './progressBar.js';
import { displayResult } from './displayResult.js';
import { createButtons } from './createButtons.js';
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
    displayResult(
      mainSection,
      data,
      currentQuestion,
      correctAnswers,
      correctAnswersText
    );
    allQuestionsAnswered = true;
  }
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
  const btnWrapper = createButtons(
    item,
    questionCard,
    displayCurrentQuestion,
    resultText,
    correctAnswers
  );
  questionCard.appendChild(bookmarkDiv);
  questionCard.appendChild(showAnswerButton);

  return questionCard;
}
