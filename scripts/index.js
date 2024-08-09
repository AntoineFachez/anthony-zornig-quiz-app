import { availableAppStates } from '../data/availableAppStates.js';
import {
  // currentGameState,
  initialAppState,
  setInitialAppState,
} from './states/appState.js';
import { setCurrentViewIndicator } from './renderUIElements/currentViewIndicator.js';
import { initFooterButtons } from './renderUIElements/footerButtons.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';
import { createQuizSelect } from './renderUIElements/quizSelector.js';
import { createToggleButton } from './renderUIElements/darkModeToggler.js';
// import { getCurrentQuizState } from './views/renderQuiz.js';
// import { setDarkMode } from './states/darkModeToggle.js';

export function initApp() {
  const headerEl = document.querySelector('[data-js="header"]');
  const menuContainerEl = document.querySelector(
    '[data-js="menu-container-el"]'
  );
  setInitialAppState(initialAppState);

  //FIX: refactor readability: building the document
  const header = setCurrentViewIndicator(initialAppState); //* where is the user? in the header
  const footer = initFooterButtons(availableAppStates, initialAppState);
  const darkModeToggle = createToggleButton();
  const quizSelect = createQuizSelect();

  darkModeToggle.classList.add('btn', 'darkModeToggle');
  quizSelect.classList.add('select', 'quizSelect');

  getBookMarkedItems(); //* counter in the footerButton

  //FIX: refactor readability: append items to main section
  menuContainerEl.append(darkModeToggle, quizSelect);
  menuContainerEl.classList.add('menu');
  headerEl.append(menuContainerEl);
}
initApp();
