import { getBookMarkedItems } from '../views/bookMarkedItems.js';
// import { createBookMark } from '../questionCard/createBookmark.js';

export function createQuestionCard(
  currentStateData,
  mainSection,
  item,
  currentQuestionIndex,
  displayCurrentQuestion,
  createButtonArrayCard
  // countCorrectAnswers
) {
  const questionCard = document.createElement('section');
  questionCard.classList.add('question-card');

  createBookMark(currentStateData, questionCard, item);
  createImg(mainSection, item);
  createQuestionText(questionCard, item);
  const resultText = createResultText(mainSection, questionCard);
  createButtonArrayCard(
    item,
    questionCard,
    displayCurrentQuestion,
    resultText
    // countCorrectAnswers
  );
  createCheatButton(item, questionCard, currentQuestionIndex, resultText);

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
export function createBookMark(currentStateData, questionCard, item) {
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
    const questionIndex = currentStateData.findIndex(
      (q) => q.imgUrl === item.imgUrl
    );

    if (questionIndex !== -1) {
      // Toggle the bookmark state in the data array
      currentStateData[questionIndex].bookMarkState =
        !currentStateData[questionIndex].bookMarkState;

      // Save the entire data array to LS
      localStorage.setItem('quizData', JSON.stringify(currentStateData));
      // Get the current Bookmark states from LS
      getBookMarkedItems();
    } else {
      console.error('Question not found in data array!');
    }
    // Update the bookmark icon

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
  currentQuestionIndex,
  resultText
) {
  const showAnswerButton = document.createElement('button');
  showAnswerButton.textContent = 'cheat';
  showAnswerButton.setAttribute(
    'aria-label',
    'Show answer for question ' + currentQuestionIndex
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
