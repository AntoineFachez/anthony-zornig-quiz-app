import { manageDataLS } from '../../data/data.js';

import { setInitialAppState, getCurrentAppState } from './states/appState.js';
import { availableAppStates } from './states/availableStates.js';

import { setCurrentViewIndicator } from './renderUIElements/currentViewIndicator.js';
import { initFooterButtons } from './renderUIElements/footerButtons.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';

let initialAppState = { currentView: 'profile' };

export const quizState = {
  allQuestionsAnswered: false,
  currentStateData: manageDataLS(),
  bookmarked: [],
  currentQuestionIndex: 0,
  countCorrectAnswers: 0,
  progressPercent: 0,
  correctAnswersText: '',
};

export function initApp() {
  //* render UIElements
  setCurrentViewIndicator(initialAppState); //* in the header
  initFooterButtons(availableAppStates, initialAppState);
  quizState.bookmarked = getBookMarkedItems(); //* counter in the footerButton

  setInitialAppState(initialAppState);
}
initApp();
