import { setCurrentViewIndicator } from '../renderUIElements/currentViewIndicator.js';
import {
  initFooterButtons,
  setButtonClass,
} from '../renderUIElements/footerButtons.js';

import { getCurrentQuizState, renderQuiz } from '../views/renderQuiz.js';
import { renderBookMarked } from '../views/renderBookMarkedItems.js';
import { renderProfile } from '../views/renderProfile.js';
import { setDarkMode } from './darkModeToggle.js';
import { createCardSelectionDropdown } from '../renderUIElements/newCardProcessSelector.js';
import { handleUseGeminiForSuggestions } from '../views/renderCreateNewQuestionCards.js';

export function setNewViewState(currentAppState) {
  const currentQuizState = getCurrentQuizState();

  setCurrentViewIndicator(currentAppState);
  setButtonClass(currentAppState);
  // initFooterButtons(availableAppStates, getCurrentAppState());
  if (currentAppState.currentView === 'quiz') {
    renderQuiz();
  } else if (currentAppState.currentView === 'bookmarked') {
    renderBookMarked();
  } else if (currentAppState.currentView === 'newCard') {
    handleUseGeminiForSuggestions(
      createCardSelectionDropdown,
      currentAppState,
      currentQuizState
    );
  } else if (currentAppState.currentView === 'profile') {
    renderProfile();
  } else {
  }
  setDarkMode(currentAppState);

  return currentAppState;
}
