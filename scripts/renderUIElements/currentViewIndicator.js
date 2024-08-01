// import { createCurrentQuestion, createButtonArrayCard } from '../index.js';
// import { createQuestionCard } from '../questionCard/createQuestionCard.js';
// import { displayAllBookMarked } from '../views/bookMarkedItems.js';
// import { data } from '../../data/data.js';
// import { renderProfile } from './renderProfile.js';

export function setCurrentViewIndicator(appState) {
  // console.log(appState);
  const currentViewIndicator = document.getElementById(
    'current-view-indicator'
  );

  if (currentViewIndicator) {
    currentViewIndicator.textContent = appState.currentView;
    setTimeout(() => {
      currentViewIndicator.classList.add('current-view--changed');
      currentViewIndicator.classList.remove('current-view-indicator');
    }, 0);
    setTimeout(() => {
      currentViewIndicator.classList.add('current-view-indicator');
      currentViewIndicator.classList.remove('current-view--changed');
    }, 1000);
  } else {
    console.error('current-view-indicator element not found');
  }
}
