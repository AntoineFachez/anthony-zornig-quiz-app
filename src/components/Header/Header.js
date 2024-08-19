import { setCurrentViewIndicator } from '../../renderUIElements/currentViewIndicator.js';
import { createToggleButton } from '../../renderUIElements/darkModeToggler.js';
import { getCurrentQuizState } from '../../views/Quiz/quizHelpers.js';
const Header = (initialAppState) => {
  console.log('init header');
  const header = document.createElement('header');
  const stateIndicator = setCurrentViewIndicator(
    initialAppState,
    getCurrentQuizState()
  );
  const darkModeToggle = createToggleButton();

  header.classList.add('header');

  header.append(stateIndicator, darkModeToggle);

  return header;
};

export default Header;
