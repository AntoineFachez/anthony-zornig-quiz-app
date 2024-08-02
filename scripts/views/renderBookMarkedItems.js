import { manageDataLS, quizState } from '../../data/data.js';
import { createQuestionCard } from '../questionCard/createQuestionCard.js';

let currentStateData;
const mainSection = document.querySelector('.main-section');
const bookmarkedArray = [];

export function getBookMarkedItems() {
  const bookMarkButton = document.querySelector('.--bookmarked');
  if (!localStorage.getItem('quizData')) {
    currentStateData = data;
  } else {
    currentStateData = JSON.parse(localStorage.getItem('quizData'));
  }
  const bmArray = currentStateData.filter(
    (item) => item.bookMarkState === true
  );
  bookMarkButton.textContent =
    bmArray.length > 0 ? `Bookmark (${bmArray.length})` : 'Bookmark';
  bookmarkedArray.push(bmArray);
  return bmArray;
}

export function renderBookMarked() {
  mainSection.innerHTML = '';

  const bookmarkedQuestions = [];
  quizState.bookmarked.forEach((item) => {
    bookmarkedQuestions.push(createQuestionCard(quizState, item));
  });
  // console.log(bookmarkedQuestions);
  if (bookmarkedQuestions.length > 0) {
    bookmarkedQuestions.forEach((questionCard) => {
      mainSection.appendChild(questionCard);
    });
  }
}
