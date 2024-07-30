import { getBookMarkedItems } from '../views/bookMarkedItems.js';

export function createQuestionCard(
  currentsStateData,
  mainSection,
  item,
  currentQuestion,
  displayCurrentQuestion,
  createButtons
  // correctAnswers
) {
  const questionCard = document.createElement('section');
  questionCard.classList.add('question-card');

  createBookMark(currentsStateData, questionCard, item);
  createImg(mainSection, item);
  createQuestionText(questionCard, item);
  const resultText = createResultText(mainSection, questionCard);
  createButtons(
    item,
    questionCard,
    displayCurrentQuestion,
    resultText
    // correctAnswers
  );
  createCheatButton(item, questionCard, currentQuestion, resultText);

  return questionCard;
}

export function createResultText(mainSection, questionCard) {
  const resultText = document.createElement('p');
  resultText.classList.add('main-section--result-text');
  resultText.setAttribute('aria-label', resultText);

  mainSection.appendChild(resultText);
  return resultText;
}

export function createImg(mainSection, item) {
  if (item.imgUrl && item.imgAlt) {
    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = item.alt;
    img.classList.add('question-card--image');
    mainSection.appendChild(img);
  }
}
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

export function createQuestionText(questionCard, item) {
  const questionText = document.createElement('p');
  questionText.textContent = item.question;
  questionText.classList.add('question-card--text');
  questionText.setAttribute('aria-label', questionText);

  questionCard.appendChild(questionText);
}
export function createCheatButton(
  item,
  questionCard,
  currentQuestion,
  resultText
) {
  const showAnswerButton = document.createElement('button');
  showAnswerButton.textContent = 'cheat';
  showAnswerButton.setAttribute(
    'aria-label',
    'Show answer for question ' + currentQuestion
  );
  showAnswerButton.classList.add('btn');
  showAnswerButton.classList.add('btn--show-answer');
  showAnswerButton.addEventListener('click', () => {
    console.log('clicked');
    showAnswerButton.textContent = item.answer;
    showAnswerButton.disabled = true;
  });
  questionCard.appendChild(showAnswerButton);
}
