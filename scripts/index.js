import { availableAppStates } from './states/availableStates.js';
import { initialAppState, setInitialAppState } from './states/appState.js';

import { quizState } from '../data/data.js';

import { setCurrentViewIndicator } from './renderUIElements/currentViewIndicator.js';
import { initFooterButtons } from './renderUIElements/footerButtons.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';

export function initApp() {
  setCurrentViewIndicator(initialAppState); //* where is the user? in the header
  initFooterButtons(availableAppStates, initialAppState);

  quizState.bookmarked = getBookMarkedItems(); //* counter in the footerButton

  setInitialAppState(initialAppState);
}
initApp();
