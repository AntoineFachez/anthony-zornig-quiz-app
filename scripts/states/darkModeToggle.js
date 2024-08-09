import { getCurrentQuizState } from '../views/renderQuiz.js';

export function toggleDarkMode() {
  const currentQuiz = getCurrentQuizState();
  let toggleTopBottom = 'top';
  const className = 'dark-mode';

  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const card = document.querySelector('section');

  if (body.classList.contains(className)) {
    toggleTopBottom = 'bottom';
    body.classList.remove(className);
  } else {
    toggleTopBottom = 'top';
    body.classList.add(className);
  }

  const gradient1 = `linear-gradient(to ${toggleTopBottom},${currentQuiz.colorPalette[0]},${currentQuiz.colorPalette[3]})`;
  const gradient2 = `linear-gradient(to ${toggleTopBottom},${currentQuiz.colorPalette[1]},${currentQuiz.colorPalette[2]})`;
  const gradient3 = `linear-gradient(to ${toggleTopBottom},${currentQuiz.colorPalette[2]},${currentQuiz.colorPalette[1]})`;
  const gradient4 = `linear-gradient(to ${toggleTopBottom},${currentQuiz.colorPalette[2]},${currentQuiz.colorPalette[3]})`;

  if (body.classList.contains(className)) {
    header.style.background = gradient2;

    body.style.background = gradient1;
    card.style.background = gradient4;

    footer.style.background = gradient3;
  } else {
    header.style.background = gradient2;

    body.style.background = gradient4;
    card.style.background = gradient1;

    footer.style.background = gradient3;
  }
}
