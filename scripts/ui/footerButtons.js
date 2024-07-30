import { displayAllBookMarked } from '../views/bookMarkedItems.js';

export function initHomeButton(appState) {
  const bookMarkButton = document.getElementById('btn-home');
  if (bookMarkButton) {
    bookMarkButton.addEventListener('click', () =>
      setAppState(appState, 'home')
    );
  } else {
    console.error('Bookmark button not found!');
  }
}
export function initBookMarkButton(appState) {
  const bookMarkButton = document.getElementById('btn-bookmark');
  if (bookMarkButton) {
    bookMarkButton.addEventListener('click', () =>
      setAppState(appState, 'bookmark')
    );
  } else {
    console.error('Bookmark button not found!');
  }
}
export function initProfileButton(appState) {
  const bookMarkButton = document.getElementById('btn-profile');
  if (bookMarkButton) {
    bookMarkButton.addEventListener('click', () =>
      setAppState(appState, 'profile')
    );
  } else {
    console.error('Bookmark button not found!');
  }
}
export function setAppState(appState, newAppState) {
  console.log(newAppState);
  appState.currentView = newAppState;
}
