// import { quizStateMCU } from '../../data/dataMCU.js';
import { getCurrentQuizState, currentQuizState } from './renderQuiz.js';
import { createQuestionCard } from '../questionCard/createQuestionCard.js';
import { currentGameState } from '../states/appState.js';

let state;
const mainSection = document.querySelector('.main-section');
const bookmarkedArray = [];

export function getBookMarkedItems() {
  state = getCurrentQuizState();

  const bookMarkButton = document.querySelector('.--bookmarked');

  const bmArray = state.currentStateData.filter(
    (item) => item.bookMarkState === true
  );
  bookMarkButton.textContent =
    bmArray.length > 0 ? `Bookmark (${bmArray.length})` : 'Bookmark';
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
      mainSection.appendChild(questionCard);
    });
  }
}
