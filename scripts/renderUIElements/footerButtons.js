import { getCurrentAppState } from '../states/appState.js';
import { setNewViewState } from '../states/viewState.js';

const footer = document.getElementById('footer');

export function initFooterButtons(availableAppStates, currentAppState) {
  availableAppStates.forEach((buttonData) => {
    const bt = renderButton(availableAppStates, currentAppState, buttonData);

    // if (buttonData.callFn) {
    //   buttonData.callFn(); // Execute the function
    // }
    footer.appendChild(bt);
  });

  setButtonClass(currentAppState);
}

export function renderButton(availableAppStates, currentAppState, buttonData) {
  const buttonWrapper = document.createElement('div');
  const button = document.createElement('button');
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');

  if (button) {
    legend.textContent = buttonData.content;

    // button.textContent = buttonData.content;
    button.data = buttonData;
    fieldset.classList.add('footer-btns-fieldset');
    button.classList.add('btn');
    button.classList.add('btn--footer');
    button.classList.add(`--${buttonData.view}`); //--bookmarked
    button.addEventListener('click', () => {
      try {
        // console.log(button.data, buttonData.view);
        console.log(currentAppState.currentView);
        currentAppState.currentView = buttonData.view;
        // setNewViewState({ currentView: buttonData.view });
        setNewViewState(currentAppState);
        // setButtonClass(buttonData);
      } catch (error) {
        console.error('Error in setNewViewState:', error);
      }
    });
  } else {
    console.error('Home button not found!');
  }
  fieldset.append(button, legend);
  buttonWrapper.append(fieldset);

  return buttonWrapper;
}

export function setButtonClass(currentAppState) {
  const buttons = document.querySelectorAll('.btn--footer');
  const lightOrDarkMode = currentAppState.darkMode ? 'darkMode' : 'lightMode';
  buttons.forEach((button) => {
    // console.log(button.data);
    button.style.backgroundSize = `2rem`;
    button.style.backgroundRepeat = `no-repeat`;
    if (button?.data?.view === currentAppState.currentView) {
      const iconPath = button?.data?.icons[lightOrDarkMode].active;
      button.style.backgroundImage = `url(../../assets/${iconPath})`;
      button.style.backgroundPosition = 'center';
      button.style.color = '#000';

      button.classList.add('btn--view-inFocus');
    } else {
      const iconPath = button?.data?.icons[lightOrDarkMode].inactive;
      button.style.backgroundImage = `url(../../assets/${iconPath})`;
      button.style.backgroundPosition = 'center';
      button.style.cursor = 'pointer';
      button.style.color = '#fff';
      // button.style.backgroundImage = `url(${iconPath})`;
      button.classList.remove('btn--view-inFocus');
    }
  });
}
