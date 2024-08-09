import { getCurrentAppState } from '../states/appState.js';
import { setDarkMode } from '../states/darkModeToggle.js';
import { getCurrentQuizState } from '../views/renderQuiz.js';

const toggleButton = document.createElement('button');

export function createToggleButton() {
  const currentAppState = getCurrentAppState();
  setToggleDarkModeIcon();

  toggleButton.id = 'toggleButtonDarkMode';
  toggleButton.classList.add('btn', 'btn__icon');

  toggleButton.addEventListener(
    'click',
    () => setToggleDarkModeIcon()
    // () => setDarkMode(currentAppState)
  );

  // toggleButton.textContent = 'Toggle Dark Mode';
  // toggleButton.style.backgroundImage = `url(${
  //   darkMode ? darkModeIcon : lightModeIcon
  // })`;
  // toggleButton.style.backgroundSize = `1rem`;
  // toggleButton.style.backgroundRepeat = `no-repeat`;
  return toggleButton;
}
export const setToggleDarkModeIcon = () => {
  const currentAppState = getCurrentAppState();
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
  if (currentAppState.darkMode) {
    currentAppState.darkMode = false;
    // setDarkMode(currentAppState);
  } else {
    currentAppState.darkMode = true;
    // setDarkMode(currentAppState);
  }
};
