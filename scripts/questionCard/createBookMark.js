import { getCurrentAppState } from '../states/appState.js';
import {
  getBookMarkedItems,
  renderBookMarked,
} from '../views/renderBookMarkedItems.js';

export function createBookMark(currentAppState, quizState, questionCard, item) {
  const iconUrl = new URL(
    'https://raw.githubusercontent.com/AntoineFachez/anthony-zornig-quiz-app/main/assets/icons/',
    import.meta.url
  );
  const bookmarkDiv = document.createElement('div');
  bookmarkDiv.id = `bookmark_${item.imgUrl}`; // Set imgUrl as unique ID
  bookmarkDiv.classList.add(`bookmarked`);

  // Create bookmark icon
  const bookmarkIcon = document.createElement('img');
  bookmarkIcon.classList.add(`--${item.bookMarkState}`);

  bookmarkIcon.src =
    item.bookMarkState === false
      ? `${iconUrl}bookmark_transparent.png`
      : `${iconUrl}bookmark_filled.png`;

  bookmarkIcon.alt =
    item.bookMarkState === false ? 'Bookmark question' : 'marked question';

  // Toggle state
  bookmarkIcon.addEventListener('click', () => {
    // Find the question object in the data array
    const questionIndex = quizState.currentStateData.findIndex(
      (q) => q.imgUrl === item.imgUrl
    );

    if (questionIndex !== -1) {
      // Toggle the bookmark state in the data array
      quizState.currentStateData[questionIndex].bookMarkState =
        !quizState.currentStateData[questionIndex].bookMarkState;

      // Save the entire data array to LS
      localStorage.setItem(
        quizState.lsObjectName,
        JSON.stringify(quizState.currentStateData)
      );
    } else {
      console.error('Question not found in data array!');
    }
    console.log(currentAppState.darkMode);

    if (currentAppState.darkMode === true) {
      bookmarkIcon.src =
        item.bookMarkState === false
          ? `${iconUrl}bookmark_darkMode_inactive.png`
          : `${iconUrl}bookmark_darkMode_active.png`;
    } else {
      bookmarkIcon.src =
        item.bookMarkState === false
          ? `${iconUrl}bookmark_transparent.png`
          : `${iconUrl}bookmark_filled.png`;
    }

    bookmarkIcon.alt =
      item.bookMarkState === false ? 'Bookmark question' : 'marked question';
    // Get the current Bookmark states from LS
    getBookMarkedItems(currentAppState);
    if (getCurrentAppState.currentView === 'bookmarked') {
      renderBookMarked();
    }
  });

  bookmarkDiv.appendChild(bookmarkIcon);
  questionCard.appendChild(bookmarkDiv);
}
