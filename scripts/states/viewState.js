import { quizStateProfessionalSoccer } from '../../data/dataProfessionalSoccer.js';
import { setCurrentViewIndicator } from '../renderUIElements/currentViewIndicator.js';
import { setButtonClass } from '../renderUIElements/footerButtons.js';

import { getCurrentQuizState, renderQuiz } from '../views/renderQuiz.js';
import { renderBookMarked } from '../views/renderBookMarkedItems.js';
import { renderProfile } from '../views/renderProfile.js';
import { setDarkMode } from './darkModeToggle.js';
import { getCurrentAppState } from './appState.js';
import { renderNewCard } from '../views/renderNewCard.js';

export function setNewViewState(currentAppState) {
  const currentQuizState = getCurrentQuizState();

  setCurrentViewIndicator(currentAppState);
  setButtonClass(currentAppState);

  if (currentAppState.currentView === 'quiz') {
    renderQuiz();
  } else if (currentAppState.currentView === 'bookmarked') {
    renderBookMarked();
  } else if (currentAppState.currentView === 'newCard') {
    renderNewCard(currentQuizState);
  } else if (currentAppState.currentView === 'profile') {
    renderProfile();
  } else {
  }
  setDarkMode(currentAppState);

  return currentAppState;
}
