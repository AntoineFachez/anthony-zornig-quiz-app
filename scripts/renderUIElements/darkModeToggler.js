import { getCurrentAppState } from '../states/appState.js';
import { setDarkMode } from '../states/darkModeToggle.js';
import { getCurrentQuizState } from '../views/renderQuiz.js';

const toggleButton = document.createElement('button');

export function createToggleButton() {
  const currentAppState = getCurrentAppState();
  setToggleDarkModeIcon(currentAppState);

  toggleButton.id = 'toggleButtonDarkMode';
  toggleButton.classList.add('btn', 'btn__icon');

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
  } else {
    currentAppState.darkMode = true;
    body.classList.add(className);
    setToggleDarkModeIcon(currentAppState);
    setDarkMode(currentAppState);
  }
};
export const setToggleDarkModeIcon = (currentAppState) => {
  console.log(currentAppState);

  const darkMode = currentAppState.darkMode;
  const darkModeIcon = '../../assets/icons/darkMode.png';
  const lightModeIcon = '../../assets/icons/lightMode.png';

  // toggleButton.textContent = 'Toggle Dark Mode';
  toggleButton.style.backgroundImage = `url(${
    darkMode ? darkModeIcon : lightModeIcon
  })`;
  toggleButton.style.backgroundSize = `1rem`;
  toggleButton.style.backgroundRepeat = `no-repeat`;
};
