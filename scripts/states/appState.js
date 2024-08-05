import { setNewViewState } from './viewState.js';
import { setNewQuizState } from './gameState.js';

export let initialAppState = { currentView: 'quiz' };

let currentAppState = {};
let currentGameState = {};
const mainSection = document.querySelector('.main-section');

export function setInitialAppState(initialAppState) {
  mainSection.innerHTML = '';
  currentAppState = initialAppState;
  // currentGameState = initialGameState;

  setNewViewState(currentAppState);
  setNewQuizState(currentGameState);
}
export function getCurrentAppState(params) {
  console.log(currentAppState);
  return currentAppState;
}
export function setNewAppState(newState) {
  currentAppState.currentView = newState;

  return currentAppState;
}
