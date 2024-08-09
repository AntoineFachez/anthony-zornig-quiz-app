// import { setToggleDarkModeIcon } from '../renderUIElements/darkModeToggler.js';
import { getCurrentQuizState } from '../views/renderQuiz.js';
import { getCurrentAppState } from './appState.js';

// export function setDarkMode(currentAppState) {
//   const className = 'dark-mode';

//   const body = document.querySelector('body');
//   if (body.classList.contains(className)) {
//     body.classList.remove(className);
//   } else {
//     body.classList.add(className);
//   }
// }

export function setDarkMode(mode) {
  console.log(mode);

  const currentQuiz = getCurrentQuizState();
  // setToggleDarkModeIcon();
  let toggleTopBottom = 'bottom';
  const className = 'dark-mode';

  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const card = document.querySelector('section');

  if (mode.darkMode) {
    // console.log('clicked', body.classList);
    toggleTopBottom = 'bottom';
    body.classList.remove(className);
    // mode.darkMode = false;
  } else {
    // console.log('clicked', body.classList);
    toggleTopBottom = 'top';
    body.classList.add(className);
    // mode.darkMode = true;
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
