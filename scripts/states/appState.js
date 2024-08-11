import { setNewViewState } from './viewState.js';

export let initialAppState = { currentView: 'quiz', darkMode: true };
export let currentAppState = {};
export let currentGameState = {};

const mainSection = document.querySelector('.main-section');

export function setInitialAppState(initialAppState) {
  mainSection.innerHTML = '';
  currentAppState = initialAppState;

  setNewViewState(currentAppState);
}
export function getCurrentAppState() {
  return currentAppState;
}
export function setNewAppState(newState) {
  currentAppState.currentView = newState;

  return currentAppState;
}
