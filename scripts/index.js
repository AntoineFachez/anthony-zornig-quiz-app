import { manageDataLS, quizState } from '../data/data.js';

import { setInitialAppState, getCurrentAppState } from './states/appState.js';
import { availableAppStates } from './states/availableStates.js';

import { setCurrentViewIndicator } from './renderUIElements/currentViewIndicator.js';
import { initFooterButtons } from './renderUIElements/footerButtons.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';

let initialAppState = { currentView: 'bookmarked' };

export function initApp() {
  setCurrentViewIndicator(initialAppState); //* in the header
  initFooterButtons(availableAppStates, initialAppState);
  const branchNames = ['main', 'features'];

  quizState.bookmarked = getBookMarkedItems(); //* counter in the footerButton

  setInitialAppState(initialAppState);
}
initApp();
