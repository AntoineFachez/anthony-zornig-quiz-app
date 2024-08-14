import { availableAppStates } from '../data/availableAppStates.js';
import {
  getCurrentAppState,
  // currentGameState,
  initialAppState,
  setInitialAppState,
} from './states/appState.js';
import { setCurrentViewIndicator } from './renderUIElements/currentViewIndicator.js';
import { initFooterButtons } from './renderUIElements/footerButtons.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';
import { createQuizSelect } from './renderUIElements/quizSelector.js';
import { createToggleButton } from './renderUIElements/darkModeToggler.js';
import { getCurrentQuizState } from './views/renderQuiz.js';
// import { getCurrentQuizState } from './views/renderQuiz.js';
// import { setDarkMode } from './states/darkModeToggle.js';

export function initApp() {
  const mainSection = document.querySelector('main');
  const headerEl = document.querySelector('[data-js="header"]');
  // const footer = document.getElementById('footer');
  const menuContainerEl = document.querySelector(
    '[data-js="menu-container-el"]'
  );
  setInitialAppState(initialAppState);

  //FIX: refactor readability: building the document
  const header = setCurrentViewIndicator(
    initialAppState,
    getCurrentQuizState()
  ); //* where is the user? in the header
  const footerButtons = initFooterButtons(
    availableAppStates,
    getCurrentAppState()
  );
  // console.log(footerButtons);

  const darkModeToggle = createToggleButton();
  const quizSelect = createQuizSelect(initialAppState);

  darkModeToggle.classList.add('btn', 'darkModeToggle');
  quizSelect.classList.add('select', 'quizSelect');

  getBookMarkedItems(initialAppState); //* counter in the footerButton

  //FIX: refactor readability: append items to main section
  menuContainerEl.append(darkModeToggle, quizSelect);
  menuContainerEl.classList.add('menu');
  // footer.append(footerButtons);
  headerEl.append(menuContainerEl);

  // mainSection.append(footer);
}
initApp();
