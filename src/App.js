import {
  initialAppState,
  availableAppStates,
} from './data/availableAppStates.js';
import { setInitialAppState } from './states/appState.js';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import { getBookMarkedItems } from './views/renderBookMarkedItems.js';

const App = () => {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  const header = Header(initialAppState);
  const footer = document.createElement('footer');

  const htmlObjects = {
    body: body,
    main: main,
    header: header,
    footer: footer,
  };
  const footerElement = Footer(htmlObjects, availableAppStates);
  console.log(footerElement.children[0].textContent);

  footer.append(footerElement);
  main.append(header, footer);

  setInitialAppState(initialAppState, htmlObjects);
  getBookMarkedItems(initialAppState); //* counter in the footerButton

  main.classList.add('.main-section');

  return main;
};
export default App;
