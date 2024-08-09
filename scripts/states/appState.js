import { getCurrentQuizState } from '../views/renderQuiz.js';
import { toggleDarkMode } from './darkModeToggle.js';
import { setNewViewState } from './viewState.js';
export let initialAppState = { currentView: 'profile' };

let currentAppState = {};
export let currentGameState = {};
const mainSection = document.querySelector('.main-section');

export function setInitialAppState(initialAppState) {
  mainSection.innerHTML = '';
  currentAppState = initialAppState;

  setNewViewState(currentAppState);
  toggleDarkMode();
}
export function getCurrentAppState(params) {
  console.log(currentAppState);
  return currentAppState;
}
export function setNewAppState(newState) {
  currentAppState.currentView = newState;

  return currentAppState;
}
