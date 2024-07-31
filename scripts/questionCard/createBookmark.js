import { getBookMarkedItems } from '../views/bookMarkedItems';

export function createBookMark(currentsStateData, questionCard, item) {
  const bookmarkDiv = document.createElement('div');
  bookmarkDiv.id = `bookmark_${item.imgUrl}`; // Set imgUrl as unique ID
  bookmarkDiv.classList.add(`bookmarked`);

  // Create bookmark icon
  const bookmarkIcon = document.createElement('img');
  bookmarkIcon.classList.add(`--${item.bookMarkState}`);

  // Set initial state
  // const iconUrl = new URL('/assets/icons/', import.meta.url);
  // bookmarkIcon.src =
  //   item.bookMarkState === false
  //     ? `${iconUrl}bookmark_transparent.png`
  //     : `${iconUrl}bookmark_filled.png`;

  bookmarkIcon.alt =
    item.bookMarkState === false ? 'Bookmark question' : 'marked question';

  // Toggle state
  bookmarkIcon.addEventListener('click', () => {
    // Find the question object in the data array
    const questionIndex = currentsStateData.findIndex(
      (q) => q.imgUrl === item.imgUrl
    );

    if (questionIndex !== -1) {
      // Toggle the bookmark state in the data array
      currentsStateData[questionIndex].bookMarkState =
        !currentsStateData[questionIndex].bookMarkState;

      // Save the entire data array to LS
      localStorage.setItem('quizData', JSON.stringify(currentsStateData));
      // Get the current Bookmark states from LS
      getBookMarkedItems();
    } else {
      console.error('Question not found in data array!');
    }
    // Update the bookmark icon
    // const iconUrl = new URL('/assets/icons/', import.meta.url);
    // bookmarkIcon.src =
    //   item.bookMarkState === false
    //     ? `${iconUrl}bookmark_transparent.png`
    //     : `${iconUrl}bookmark_filled.png`;

    bookmarkIcon.alt =
      item.bookMarkState === false ? 'Bookmark question' : 'marked question';
  });

  bookmarkDiv.appendChild(bookmarkIcon);
  questionCard.appendChild(bookmarkDiv);
}
