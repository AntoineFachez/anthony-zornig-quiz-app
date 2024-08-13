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
    setToggleDarkModeIcon(currentAppState);
    setDarkMode(currentAppState);
    setButtonClass(currentAppState);
  } else {
    currentAppState.darkMode = true;
    body.classList.add(className);
    setDarkMode(currentAppState);
    setToggleDarkModeIcon(currentAppState);
    setButtonClass(currentAppState);
  }
  getBookMarkedItems(currentAppState);
};
export const setToggleDarkModeIcon = (currentAppState) => {
  // console.log(currentAppState);

  const darkMode = currentAppState.darkMode;
  const darkModeIcon = '../../assets/icons/darkMode_active.png';
  const lightModeIcon = '../../assets/icons/darkMode_inactive.png';

  // toggleButton.textContent = 'Toggle Dark Mode';
  toggleButton.style.backgroundImage = `url(${
    darkMode ? darkModeIcon : lightModeIcon
  })`;
  toggleButton.style.backgroundSize = `1.6rem`;
  toggleButton.style.backgroundRepeat = `no-repeat`;
  toggleButton.style.backgroundPosition = 'center';
  toggleButton.style.cursor = 'pointer';
};
//
