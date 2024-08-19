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

  const colorActive = '';

  // Create bookmark icon
  const bookmarkIcon = document.createElement('img');
  bookmarkIcon.classList.add(`--${item.bookMarkState}`);

  bookmarkIcon.src =
    item.bookMarkState === true
      ? `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
<polygon fill="${colorActive}" stroke="${colorActive}" stroke-width="2" stroke-miterlimit="10" points="24,6 8,6 8,26 16,20 24,26 "/>
</svg>`
      : `${iconUrl}bookmark_filled.png`;

  bookmarkIcon.alt =
    item.bookMarkState === true ? 'Bookmark question' : 'marked question';

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
