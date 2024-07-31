import { getBookMarkedItems } from '../views/bookMarkedItems';

export function createBookMark(currentsStateData, questionCard, item) {
  const bookmarkDiv = document.createElement('div');
  bookmarkDiv.id = `bookmark_${item.imgUrl}`; // Set imgUrl as unique ID
  bookmarkDiv.classList.add(`bookmarked`);
  const bookmarkIcon = document.createElement('img');
  bookmarkIcon.classList.add(`--${item.bookMarkState}`);
  bookmarkIcon.src =
    item.bookMarkState === false
      ? '/scripts/icons/bookmark_transparent.png'
      : '/scripts/icons/bookmark_filled.png';
  bookmarkIcon.alt =
    item.bookMarkState === false ? 'Bookmark question' : 'marked question';

  bookmarkIcon.addEventListener('click', () => {
    // Find the question object in the data array
    const questionIndex = currentsStateData.findIndex(
      (q) => q.imgUrl === item.imgUrl
    );

    if (questionIndex !== -1) {
      // Toggle the bookmark state in the data array
      currentsStateData[questionIndex].bookMarkState =
        !currentsStateData[questionIndex].bookMarkState;

      // Update the visual state of the bookmark
      bookmarkDiv.classList.toggle(
        '--true',
        currentsStateData[questionIndex].bookMarkState
      );
      bookmarkDiv.classList.toggle(
        '--false',
        !currentsStateData[questionIndex].bookMarkState
      );

      // Save the entire data array to localStorage
      localStorage.setItem('quizData', JSON.stringify(currentsStateData));
      getBookMarkedItems();
    } else {
      console.error('Question not found in data array!');
    }
    const iconUrl = new URL('/scripts/icons/', import.meta.url);
    bookmarkIcon.src =
      item.bookMarkState === false
        ? `${iconUrl}bookmark_transparent.png`
        : `${iconUrl}bookmark_filled.png`;

    bookmarkIcon.alt =
      item.bookMarkState === false ? 'Bookmark question' : 'marked question';
  });

  bookmarkDiv.appendChild(bookmarkIcon);
  questionCard.appendChild(bookmarkDiv);
}
