import { setCurrentViewIndicator } from '../renderUIElements/currentViewIndicator.js';
import {
  initFooterButtons,
  setButtonClass,
} from '../renderUIElements/footerButtons.js';

import { renderQuiz } from '../views/Quiz/Quiz.js';
import {
  getBookMarkedItems,
  renderBookMarked,
} from '../views/renderBookMarkedItems.js';
import { renderProfile } from '../views/renderProfile.js';
import { setDarkMode } from './darkModeToggle.js';
import { createCardSelectionDropdown } from '../renderUIElements/newCardProcessSelector.js';
import { handleUseGeminiForSuggestions } from '../views/renderCreateNewQuestionCards.js';
import { setToggleDarkModeIcon } from '../renderUIElements/darkModeToggler.js';
import { getCurrentQuizState } from '../views/Quiz/quizHelpers.js';

export function setNewViewState(currentAppState, htmlObjects) {
  const currentQuizState = getCurrentQuizState();

  setCurrentViewIndicator(currentAppState, currentQuizState);
  setButtonClass(currentAppState);
  // initFooterButtons(availableAppStates, getCurrentAppState());
  if (currentAppState.currentView === 'quiz') {
    renderQuiz(htmlObjects, currentQuizState);
  } else if (currentAppState.currentView === 'bookmarked') {
    renderBookMarked(htmlObjects);
  } else if (currentAppState.currentView === 'newCard') {
    handleUseGeminiForSuggestions(
      createCardSelectionDropdown,
      currentAppState,
      currentQuizState
    );
  } else if (currentAppState.currentView === 'profile') {
    renderProfile(htmlObjects);
  } else {
  }
  setToggleDarkModeIcon(currentAppState);
  setDarkMode(currentAppState, htmlObjects);
  // getBookMarkedItems(currentAppState);
  return currentAppState;
}
