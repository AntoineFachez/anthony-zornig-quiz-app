// import { quizStateMCU } from '../../data/dataMCU.js';
// import { getCurrentQuizState, currentQuizState } from './Quiz/Quiz.js';
import { createQuestionCard } from '../questionCard/createQuestionCard.js';
import { currentGameState } from '../states/appState.js';
import { getCurrentQuizState } from './Quiz/quizHelpers.js';

let state;
const mainSection = document.querySelector('.main-section');
const bookmarkedArray = [];

export function getBookMarkedItems(currentAppState) {
  state = getCurrentQuizState();

  const bookMarkButton = document.createElement('button');
  bookMarkButton.classList.add('btn', '.--bookmarked');

  const bmArray = state.currentStateData.filter((item) => {
    return item.bookMarkState === true;
  });
  console.log(currentAppState.darkMode);

  bookMarkButton.textContent = bmArray.length > 0 ? `${bmArray.length}` : '';
  bookMarkButton.style.color =
    currentAppState.darkMode === true ? '#fff' : '#000';
  bookMarkButton.style.fontSize = '1.1rem';
  bookMarkButton.style.fontWeight = '100';
  bookMarkButton.style.paddingBottom = '0.7rem';
  bookmarkedArray.push(bmArray);
  state.bookmarked = bmArray;
  return bmArray;
}

export function renderBookMarked() {
  mainSection.innerHTML = '';
  const bookmarkWraper = document.createElement('div');
  bookmarkWraper.classList.add('new-card__new-questions-wrapper');
  const bookmarkedQuestions = [];
  currentQuizState.bookmarked.forEach((item) => {
    // createBookMark(currentAppState, currentQuizState, '', item);
    bookmarkedQuestions.push(createQuestionCard(currentQuizState, item));
  });
  if (bookmarkedQuestions.length > 0) {
    bookmarkedQuestions.forEach((questionCard) => {
      bookmarkWraper.append(questionCard);
    });
  }
  mainSection.append(bookmarkWraper);
}
