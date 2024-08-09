import { setNewViewState } from '../states/viewState.js';

const footer = document.getElementById('footer');

export function initFooterButtons(buttonsData, appState) {
  buttonsData.forEach((buttonData) => {
    const bt = renderButton(appState, buttonData);

    // if (buttonData.callFn) {
    //   buttonData.callFn(); // Execute the function
    // }
    footer.appendChild(bt);
  });

  setButtonClass(appState);
}

export function renderButton(appState, buttonData) {
  const htmlElement = document.createElement('button');

  if (htmlElement) {
    htmlElement.textContent = buttonData.content;
    htmlElement.data = buttonData;
    htmlElement.classList.add('btn');
    htmlElement.classList.add('btn--footer');
    htmlElement.classList.add(`--${buttonData.view}`); //--bookmarked
    htmlElement.addEventListener('click', () => {
      try {
        setNewViewState({ currentView: buttonData.view });
      } catch (error) {
        console.error('Error in setNewViewState:', error);
      }
    });
  } else {
    console.error('Home button not found!');
  }

  return htmlElement;
}

export function setButtonClass(currentAppState) {
  const buttons = document.querySelectorAll('.btn--footer');
  buttons.forEach((button) => {
    if (button.data.view === currentAppState.currentView) {
      button.classList.add('btn--view-inFocus');
    } else {
      button.classList.remove('btn--view-inFocus');
    }
  });
}
