import { getCurrentQuizState } from '../views/renderQuiz.js';

export function setDarkMode(mode) {
  console.log(mode);

  const currentQuiz = getCurrentQuizState();
  let toggleTopBottom = 'bottom';
  const className = 'dark-mode';

  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const card = document.querySelector('section');

  if (mode.darkMode) {
    toggleTopBottom = 'bottom';
  } else {
    toggleTopBottom = 'top';
  }

  const primary = `linear-gradient(to ${toggleTopBottom},${currentQuiz.colorPalette[0]},${currentQuiz.colorPalette[1]})`;
  const secondary = `linear-gradient(to ${toggleTopBottom},${currentQuiz.colorPalette[4]},${currentQuiz.colorPalette[5]})`;
  const accent1 = `linear-gradient(to ${toggleTopBottom},${currentQuiz.colorPalette[6]},${currentQuiz.colorPalette[7]})`;
  const accent2 = `linear-gradient(to ${
    toggleTopBottom === 'top' ? 'bottom' : 'top'
  },${currentQuiz.colorPalette[6]},${currentQuiz.colorPalette[7]})`;

  if (body.classList.contains(className)) {
    header.style.background = primary;

    body.style.background = primary;
    card.style.background = secondary;

    footer.style.background = primary;
  } else {
    header.style.background = accent1;

    body.style.background = secondary;
    card.style.background = primary;

    footer.style.background = accent2;
  }
}
