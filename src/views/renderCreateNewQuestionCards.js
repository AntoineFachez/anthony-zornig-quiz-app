// import {
//   handleGetSuggestionsAtGeminiSite,
//   //   handleUseGeminiForSuggestions,
//   //   renderNewCard,
// } from '../newQuestionCard/renderNewCard.js';
import { createQuestionCard } from '../questionCard/createQuestionCard.js';
import { mockData } from '../data/mockData.js';
import { manageLSData } from '../utils/manageLSData.js';
import { handleGetSuggestionsAtGeminiSite } from '../components/newQuestionCard/renderNewCard.js';
export function handleUseGeminiForSuggestions(
  createSelector,
  currentAppState,
  currentQuizState
) {
  const mainSection = document.querySelector('.main-section');
  mainSection.innerHTML = '';
  const geminiWrapper = document.createElement('div');
  const headerWrapper = document.createElement('div');
  const bodyWrapper = document.createElement('div');
  const instructions = document.createElement('p');
  const dropField = document.createElement('textarea');
  const goToGeminiButton = document.createElement('button');
  const selector = createSelector(currentAppState, currentQuizState);
  const newQuestionsWrapper = document.createElement('div');
  const btnFillDropField = document.createElement('button');

  geminiWrapper.classList.add('new-card__gemini-wrapper');
  headerWrapper.classList.add('new-card__header-wrapper');
  bodyWrapper.classList.add('new-card__body-wrapper');
  newQuestionsWrapper.classList.add('new-card__new-questions-wrapper');
  dropField.classList.add('new-card__dropField');
  goToGeminiButton.classList.add('btn');

  geminiWrapper.style.width = '100%';
  geminiWrapper.style.height = '100%';
  bodyWrapper.style.width = '100%';
  bodyWrapper.style.height = '100%';
  dropField.style.width = '60ch';
  // dropField.style.maxWidth = '60ch';
  dropField.style.height = '400px';
  instructions.style.color = 'currentColor';

  goToGeminiButton.textContent = 'https://gemini.google.com';
  instructions.textContent = 'GET some json and DROP it here or use MOCK DATA';
  instructions.classList.add('flowing-text');
  btnFillDropField.textContent = 'fill with mock data';

  const referenceData =
    currentQuizState.geminiGenerateInstructionPrompt +
    '… ' +
    JSON.stringify(currentQuizState.currentStateData);

  goToGeminiButton.addEventListener('click', () =>
    handleGetSuggestionsAtGeminiSite(referenceData)
  );
  const fillDropfieldWithValues = () => {
    dropField.value = JSON.stringify(mockData);
  };
  const deleteDropfieldValues = () => {
    dropField.value = '';
  };

  dropField.addEventListener('blur', (event) => {
    event.preventDefault();
    const newQuizData = JSON.parse(event.target.value);

    if (newQuizData) {
      bodyWrapper.innerHTML = '';
      geminiWrapper.style.height = 'fit-content';
      bodyWrapper.style.height = 'fit-content';
      dropField.style.width = '40ch';
      dropField.style.height = '10ch';

      currentQuizState.lsObjectNameNewQuestions = `${currentQuizState.lsObjectName}New`;
      console.log(currentQuizState);

      currentQuizState.currentStateNewQuizData = newQuizData;
      currentQuizState.currentStateNewQuizData.forEach((question) => {
        const btnStoreNewQuestionDataToLS = document.createElement('button');
        btnStoreNewQuestionDataToLS.textContent = 'add question to Quiz';
        btnStoreNewQuestionDataToLS.addEventListener('click', () =>
          console.log('clicked')
        );
        const questionCardWrapper = document.createElement('div');
        const newQuestionCard = createQuestionCard(currentQuizState, question);
        questionCardWrapper.append(
          btnStoreNewQuestionDataToLS,
          newQuestionCard
        );
        console.log(newQuestionCard);
        newQuestionsWrapper.append(questionCardWrapper);
      });
    } else {
    }
    // return false;
  });
  btnFillDropField.addEventListener('click', () => {
    if (dropField.value) {
      deleteDropfieldValues();
    } else {
      fillDropfieldWithValues();
    }
  });
  headerWrapper.append(selector);
  bodyWrapper.append(
    goToGeminiButton,
    instructions,
    btnFillDropField,
    dropField
  );
  geminiWrapper.append(headerWrapper, bodyWrapper);

  mainSection.append(geminiWrapper, newQuestionsWrapper);
}
