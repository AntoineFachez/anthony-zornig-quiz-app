import {
  handleGetSuggestionsAtGeminiSite,
  //   handleUseGeminiForSuggestions,
  //   renderNewCard,
} from '../newQuestionCard/renderNewCard.js';
import { createQuestionCard } from '../questionCard/createQuestionCard.js';
import { mockData } from '../../data/mockData.js';
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
  const dropField = document.createElement('textarea');
  const goToGeminiButton = document.createElement('button');
  const selector = createSelector(currentAppState, currentQuizState);
  const newQuestionsWrapper = document.createElement('div');

  geminiWrapper.classList.add('new-card__gemini-wrapper');
  headerWrapper.classList.add('new-card__header-wrapper');
  bodyWrapper.classList.add('new-card__body-wrapper');
  goToGeminiButton.classList.add('btn');

  goToGeminiButton.textContent = 'https://gemini.google.com';

  const referenceData =
    currentQuizState.geminiGenerateInstructionPrompt +
    '… ' +
    JSON.stringify(currentQuizState.currentStateData);

  goToGeminiButton.addEventListener('click', () =>
    handleGetSuggestionsAtGeminiSite(referenceData)
  );

  dropField.value = JSON.stringify(mockData);

  dropField.addEventListener('blur', (event) => {
    event.preventDefault();
    const newQuizData = JSON.parse(event.target.value);

    if (newQuizData) {
      //shallow copy of currentQuizState
      const shallowCopy = currentQuizState;
      shallowCopy.currentStateData = newQuizData;
      shallowCopy.currentStateData.forEach((question) => {
        const newQuestionCard = createQuestionCard(shallowCopy, question);
        console.log(newQuestionCard);
        newQuestionsWrapper.append(newQuestionCard);
      });
    } else {
    }
    // return false;
  });
  headerWrapper.append(selector);
  bodyWrapper.append(goToGeminiButton, dropField);
  geminiWrapper.append(headerWrapper, bodyWrapper);

  mainSection.append(geminiWrapper, newQuestionsWrapper);
}
