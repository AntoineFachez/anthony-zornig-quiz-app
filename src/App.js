import {
  initialAppState,
  availableAppStates,
} from './data/availableAppStates.js';
import { setInitialAppState } from './states/appState.js';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';
import { ProgressBar } from './renderUIElements/progressBar.js';
import { currentQuizState } from './views/Quiz/quizHelpers.js';

const App = () => {
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const progressBar = document.createElement('div');
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  const htmlObjects = {
    body: body,
    main: main,
    header: header,
    progressBar: progressBar,
    footer: footer,
  };
  const headerElement = Header(initialAppState);
  // const progressBarElement = ProgressBar(htmlObjects, currentQuizState);

  const footerElement = Footer(htmlObjects, availableAppStates);
  // console.log(footerElement.children[0].textContent);

  header.append(headerElement);
  footer.append(footerElement);

  body.append(header);
  // body.append(progressBarElement);
  body.append(footer);

  setInitialAppState(initialAppState, htmlObjects);
  // getBookMarkedItems(initialAppState); //* counter in the footerButton

  // main.classList.add('.main-section');

  body.append(main);
  return;
};
export default App;
