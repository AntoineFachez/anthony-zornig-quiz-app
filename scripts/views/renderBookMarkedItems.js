// import { quizStateMCU } from '../../data/dataMCU.js';
import { getCurrentQuizState, currentQuizState } from './renderQuiz.js';
import { createQuestionCard } from '../questionCard/createQuestionCard.js';
import { currentGameState } from '../states/appState.js';

let state;
const mainSection = document.querySelector('.main-section');
const bookmarkedArray = [];

export function getBookMarkedItems(currentAppState) {
  state = getCurrentQuizState();

  const bookMarkButton = document.querySelector('.--bookmarked');

  const bmArray = state.currentStateData.filter(
    (item) => item.bookMarkState === true
  );
  console.log(currentAppState.darkMode);

  bookMarkButton.textContent = bmArray.length > 0 ? `${bmArray.length}` : '';
  bookMarkButton.style.color =
    currentAppState.darkMode === true ? '#fff' : '#000';
  bookMarkButton.style.fontSize = '1rem';
  bookmarkedArray.push(bmArray);
  state.bookmarked = bmArray;
  return bmArray;
}

export function renderBookMarked() {
  mainSection.innerHTML = '';

  const bookmarkedQuestions = [];
  currentQuizState.bookmarked.forEach((item) => {
    bookmarkedQuestions.push(createQuestionCard(currentQuizState, item));
  });
  if (bookmarkedQuestions.length > 0) {
    bookmarkedQuestions.forEach((questionCard) => {
      mainSection.append(questionCard);
    });
  }
}
