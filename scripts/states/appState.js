import { getCurrentQuizState } from '../views/renderQuiz.js';
import { setDarkMode } from './darkModeToggle.js';
import { setNewViewState } from './viewState.js';
export let initialAppState = { currentView: 'profile', darkMode: true };

let currentAppState = {};
export let currentGameState = {};
const mainSection = document.querySelector('.main-section');

export function setInitialAppState(initialAppState) {
  mainSection.innerHTML = '';
  currentAppState = initialAppState;

  setNewViewState(currentAppState);
  setDarkMode(currentAppState);
}
export function getCurrentAppState(params) {
  // console.log(currentAppState);
  return currentAppState;
}
export function setNewAppState(newState) {
  currentAppState.currentView = newState;

  return currentAppState;
}
