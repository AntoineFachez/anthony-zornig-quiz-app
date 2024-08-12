import {
  // handleUseGeminiForSuggestions,
  renderNewCard,
} from '../newQuestionCard/renderNewCard.js';
import { handleUseGeminiForSuggestions } from '../views/renderNewQuestionCard.js';

export function createCardSelectionDropdown(currentAppState, currentQuizState) {
  const mainSection = document.querySelector('.main-section');
  mainSection.innerHTML = '';
  const dropdown = document.createElement('select');

  const suggestOption = document.createElement('option');
  suggestOption.value = 'suggest';
  suggestOption.textContent = 'Get suggestion';
  dropdown.appendChild(suggestOption);

  const manualOption = document.createElement('option');
  manualOption.value = 'manually';
  manualOption.textContent = 'Create manually';
  dropdown.appendChild(manualOption);
  // goToGemini(createSelector, currentAppState, currentQuizState);
  // Add event listener for change
  dropdown.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    console.log(event.target.value);

    if (selectedValue === 'suggest') {
      handleUseGeminiForSuggestions(
        createCardSelectionDropdown,
        currentAppState,
        currentQuizState
      );
    } else if (selectedValue === 'manually') {
      renderNewCard(
        createCardSelectionDropdown,
        currentAppState,
        currentQuizState
      );
    }
  });

  return dropdown;
}
