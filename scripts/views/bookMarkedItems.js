import { data } from '../data/data.js';

let currentsStateData;
export function getBookMarkedItems() {
  const bookMarkButton = document.querySelector('.--bookmark');

  if (!localStorage.getItem('quizData')) {
    currentsStateData = data;
  } else {
    currentsStateData = JSON.parse(localStorage.getItem('quizData'));
  }

  const bookmarkedArray = currentsStateData.filter(
    (item) => item.bookMarkState === true
  );
  bookMarkButton.textContent =
    bookmarkedArray.length > 0
      ? `Bookmark (${bookmarkedArray.length})`
      : 'Bookmark';

  return bookmarkedArray;
}
export function displayAllBookMarked(
  // bookmarkedArray,
  //   mainSection,
  // currentQuestion,
  // displayCurrentQuestion,
  createButtons
) {
  const bookmarkedArray = getBookMarkedItems();
  const mainSection = document.querySelector('.main-section');
  console.log('clicked');
  const bookmarkedQuestions = bookmarkedArray.forEach((item) => {
    createQuestionCard(
      bookmarkedArray,
      mainSection,
      item,
      '',
      '',
      createButtons
      // correctAnswers
    );
  });
  mainSection.appendChild(bookmarkedQuestions);
}
