import { data } from '../../data/data.js';

let currentStateData;
export function getBookMarkedItems() {
  const bookMarkButton = document.querySelector('.--bookmark');

  if (!localStorage.getItem('quizData')) {
    currentStateData = data;
  } else {
    currentStateData = JSON.parse(localStorage.getItem('quizData'));
  }

  const bookmarkedArray = currentStateData.filter(
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
  // currentQuestionIndex,
  // displayCurrentQuestion,
  createButtonArrayCard
) {
  const bookmarkedArray = getBookMarkedItems();
  const mainSection = document.querySelector('.main-section');
  console.log('clicked');
  const bookmarkedQuestions = bookmarkedArray.forEach((item) => {
    createQuestionCard(
      currentStateData,
      mainSection,
      item,
      currentQuestionIndex,
      createCurrentQuestion,
      createButtonArrayCard
    );
  });
  mainSection.appendChild(bookmarkedQuestions);
}
