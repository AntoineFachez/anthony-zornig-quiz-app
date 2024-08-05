import { availableAppStates } from '../data/availableAppStates.js';
import { initialAppState, setInitialAppState } from './states/appState.js';

//FIX: toggle quizzle MCU || Fortnite || professionalSoccer
import { quizStateMCU } from '../../data/dataMCU.js';

import { setCurrentViewIndicator } from './renderUIElements/currentViewIndicator.js';
import { initFooterButtons } from './renderUIElements/footerButtons.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';
import { setNewQuizState } from './states/gameState.js';
// import { renderColorPalette } from './views/renderColorPalette.js';

export function initApp() {
  setCurrentViewIndicator(initialAppState); //* where is the user? in the header
  initFooterButtons(availableAppStates, initialAppState);

  quizStateMCU.bookmarked = getBookMarkedItems(); //* counter in the footerButton

  setInitialAppState(initialAppState);
}
initApp();
