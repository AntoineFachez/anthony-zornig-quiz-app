import { getBookMarkedItems } from '../views/renderBookMarkedItems.js';
import { setNewViewState } from './viewState.js';
import { initialAppState } from '../data/availableAppStates.js';

export let currentAppState = {};
export let currentGameState = {};

// const mainSection = document.querySelector('.main-section');

export function setInitialAppState(initialAppState, htmlObjects) {
  htmlObjects.main.innerHTML = '';
  currentAppState = initialAppState;
  setNewViewState(currentAppState, htmlObjects);
}
export function getCurrentAppState() {
  return currentAppState;
}
export function setNewAppState(newState) {
  currentAppState.currentView = newState;

  return currentAppState;
}
