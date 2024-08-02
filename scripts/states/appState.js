import { setNewViewState } from './viewState.js';

export let initialAppState = { currentView: 'quiz' };

let currentAppState = {};
const mainSection = document.querySelector('.main-section');

export function setInitialAppState(initialAppState) {
  mainSection.innerHTML = '';
  currentAppState = initialAppState;

  setNewViewState(currentAppState);
}
export function getCurrentAppState(params) {
  console.log(currentAppState);
  return currentAppState;
}
export function setNewAppState(newState) {
  currentAppState.currentView = newState;

  return currentAppState;
}
