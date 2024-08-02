import { manageDataLS } from '../data/data.js';
// import { createBranchSelector } from './renderUIElements/gitBranchSelector.js';

import { setInitialAppState, getCurrentAppState } from './states/appState.js';
import { availableAppStates } from './states/availableStates.js';

import { setCurrentViewIndicator } from './renderUIElements/currentViewIndicator.js';
import { initFooterButtons } from './renderUIElements/footerButtons.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';
import { createBranchSelector } from './renderUIElements/gitBranchSelector.js';

let initialAppState = { currentView: 'quiz' };

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

  const branchNames = ['main', 'features', 'ghWorkflow'];
  // Call the createBranchSelector function
  createBranchSelector(branchNames);
  quizState.bookmarked = getBookMarkedItems(); //* counter in the footerButton

  setInitialAppState(initialAppState);
}
initApp();
