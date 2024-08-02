import { setCurrentViewIndicator } from '../renderUIElements/currentViewIndicator.js';
import { setButtonClass } from '../renderUIElements/footerButtons.js';

import { renderQuiz } from '../views/renderQuiz.js';
import { renderBookMarked } from '../views/renderBookMarkedItems.js';
import { renderProfile } from '../views/renderProfile.js';

export function setNewViewState(currentAppState) {
  // setNewAppState(currentAppState);
  setCurrentViewIndicator(currentAppState);
  setButtonClass(currentAppState);

  if (currentAppState.currentView === 'quiz') {
    renderQuiz();
  } else if (currentAppState.currentView === 'bookmarked') {
    renderBookMarked();
  } else if (currentAppState.currentView === 'profile') {
    renderProfile();
  } else {
  }

  return currentAppState;
}
