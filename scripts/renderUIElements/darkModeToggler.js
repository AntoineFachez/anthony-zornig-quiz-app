import { getCurrentAppState } from '../states/appState.js';
import { setDarkMode } from '../states/darkModeToggle.js';
import { getBookMarkedItems } from '../views/renderBookMarkedItems.js';
import { getCurrentQuizState } from '../views/renderQuiz.js';
import { setButtonClass } from './footerButtons.js';

const toggleButton = document.createElement('button');

export function createToggleButton() {
  const currentAppState = getCurrentAppState();
  setToggleDarkModeIcon(currentAppState);

  toggleButton.id = 'toggleButtonDarkMode';
  toggleButton.classList.add('btn', 'btn--footer');

  toggleButton.addEventListener('click', () => setToggleState());

  return toggleButton;
}

export const setToggleState = () => {
  const currentAppState = getCurrentAppState();

  const className = 'dark-mode';

  const body = document.querySelector('body');
  if (currentAppState.darkMode) {
    currentAppState.darkMode = false;
    body.classList.remove(className);
    // setToggleDarkModeIcon(currentAppState);
    setDarkMode(currentAppState);
    setButtonClass(currentAppState);
  } else {
    currentAppState.darkMode = true;
    body.classList.add(className);
    setDarkMode(currentAppState);
    // setToggleDarkModeIcon(currentAppState);
    setButtonClass(currentAppState);
  }
  setToggleDarkModeIcon(currentAppState);
  getBookMarkedItems(currentAppState);
};
export const setToggleDarkModeIcon = (currentAppState) => {
  // console.log(currentAppState);

  const darkMode = currentAppState.darkMode;
  const darkModeIcon = `<svg fill="currentColor" width="1.4rem" height="1.4rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>`;
  const lightModeIcon = `<svg fill="currentColor" width="1.4rem" height="1.4rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"/></svg>`;

  toggleButton.innerHTML = darkMode ? darkModeIcon : lightModeIcon;
  toggleButton.style.cursor = 'pointer';
};
//
