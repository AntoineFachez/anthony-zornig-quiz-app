import { setButtonClass } from '../renderUIElements/footerButtons.js';
import { getCurrentQuizState } from '../views/Quiz/quizHelpers.js';
import { getBookMarkedItems } from '../views/renderBookMarkedItems.js';
// import { getCurrentQuizState } from '../views/Quiz/Quiz.js';

export function setDarkMode(mode, htmlObjects) {
  const currentQuiz = getCurrentQuizState();
  let toggleTopBottom = 'bottom';
  const className = 'dark-mode';

  const body = htmlObjects.body;
  const header = htmlObjects.header;
  const footer = htmlObjects.footer;
  const cards = htmlObjects.cards;
  // console.log(cards);

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

  try {
    if (body.classList.contains(className)) {
      header.style.background = primary;

      body.style.background = primary;
      cards.forEach((card) => {
        card.style.background = secondary;
      });

      footer.style.background = primary;
    } else {
      header.style.background = accent1;

      body.style.background = secondary;
      cards.forEach((card) => {
        card.style.background = primary;
      });

      footer.style.background = accent2;
      setButtonClass(currentAppState, htmlObjects);
    }
  } catch (error) {
    header.style.background = accent1;
    body.style.background = secondary;
    footer.style.background = accent2;
  }
}
