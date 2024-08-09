import { toggleDarkMode } from '../states/darkModeToggle.js';
import { getCurrentQuizState } from '../views/renderQuiz.js';

export function createToggleButton() {
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Dark Mode';
  toggleButton.addEventListener('click', toggleDarkMode);
  toggleButton.style.top = '50%';
  toggleButton.style.left = '50%';
  toggleButton.style.backgroundColor = 'blue'; // Add your desired styles here
  toggleButton.style.color = 'white';
  toggleButton.style.border = 'none';
  toggleButton.style.borderRadius = '5px';
  toggleButton.style.cursor = 'pointer';

  return toggleButton;
}
