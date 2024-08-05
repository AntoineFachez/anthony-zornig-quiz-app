import { quizStateMCU } from '../../data/dataMCU.js';
import { quizStateFortnite } from '../../data/dataFortnite.js';
import { quizStateProfessionalSoccer } from '../../data/dataProfessionalSoccer.js';
// import { setNewQuizState } from './gameState.js';
import { setCurrentViewIndicator } from '../renderUIElements/currentViewIndicator.js';
import { setButtonClass } from '../renderUIElements/footerButtons.js';

import { renderQuiz } from '../views/renderQuiz.js';
import { renderBookMarked } from '../views/renderBookMarkedItems.js';
import { renderProfile } from '../views/renderProfile.js';

export let initialGameState = { currentQuiz: 'Fortnite' };

let currentGameState = {};

export function setNewQuizState() {
  setCurrentViewIndicator(currentGameState);
  setButtonClass(currentGameState);

  if (currentGameState.currentQuiz === 'MCU') {
    // renderQuiz(quizStateMCU);
  } else if (currentGameState.currentQuiz === 'Fortnite') {
    // renderQuiz(quizStateFortnite);
  } else if (currentGameState.currentQuiz === 'professionalSoccer') {
    // renderQuiz(quizStateProfessionalSoccer);
  } else {
  }

  return currentGameState;
}
