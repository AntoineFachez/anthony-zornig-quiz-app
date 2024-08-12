import { getCurrentAppState } from '../states/appState.js';
import { setDarkMode } from '../states/darkModeToggle.js';
import { createBookMark } from './createBookMark.js';
import { createButtonArrayCard } from './createButtons.js';

export function createQuestionCard(quizState, item) {
  const mainSection = document.querySelector('main');
  // mainSection.innerHTML = '';
  const questionCard = document.createElement('section');
  questionCard.classList.add('question-card');

  createBookMark(quizState, questionCard, item);
  createImg(questionCard, item);
  createQuestionText(questionCard, item);
  const resultText = createResultText(mainSection, questionCard);
  createButtonArrayCard(
    quizState,
    questionCard,
    resultText,
    createQuestionCard
  );
  createCheatButton(item, questionCard, quizState);

  mainSection.appendChild(questionCard);

  setDarkMode(getCurrentAppState());
  return questionCard;
}

export function createQuestionText(questionCard, item) {
  const questionText = document.createElement('p');
  questionText.textContent = item.question;
  questionText.classList.add('question-card--text');
  questionText.setAttribute('aria-label', questionText);

  questionCard.appendChild(questionText);
}
export function createResultText(mainSection, questionCard) {
  const resultText = document.createElement('p');
  resultText.classList.add('main-section--result-text');
  resultText.setAttribute('aria-label', resultText);

  mainSection.appendChild(resultText);
  return resultText;
}

export function createImg(questionCard, item) {
  if (item.imgUrl && item.imgAlt) {
    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = item.alt;
    img.classList.add('question-card--image');
    questionCard.appendChild(img);
  }
}

export function createCheatButton(item, questionCard, quizState) {
  const showAnswerButton = document.createElement('button');
  showAnswerButton.textContent = 'cheat';
  showAnswerButton.setAttribute(
    'aria-label',
    'Show answer for question ' + quizState.currentQuestionIndex
  );
  showAnswerButton.classList.add('btn');
  showAnswerButton.classList.add('btn--show-answer');
  showAnswerButton.addEventListener('click', () => {
    console.log('clicked');
    showAnswerButton.textContent = item.answer;
    showAnswerButton.disabled = true;
  });
  questionCard.appendChild(showAnswerButton);
}
