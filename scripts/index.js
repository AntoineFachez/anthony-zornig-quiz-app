import { availableAppStates } from '../data/availableAppStates.js';
import {
  currentGameState,
  initialAppState,
  setInitialAppState,
} from './states/appState.js';
import { setCurrentViewIndicator } from './renderUIElements/currentViewIndicator.js';
import { initFooterButtons } from './renderUIElements/footerButtons.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';
import { createQuizSelect } from './renderUIElements/quizSelector.js';
// import { getCurrentQuizState } from './views/renderQuiz.js';
import { toggleDarkMode } from './states/darkModeToggle.js';

export function initApp() {
  setInitialAppState(initialAppState);

  setCurrentViewIndicator(initialAppState); //* where is the user? in the header
  initFooterButtons(availableAppStates, initialAppState);
  createQuizSelect();

  getBookMarkedItems(); //* counter in the footerButton
}
initApp();
