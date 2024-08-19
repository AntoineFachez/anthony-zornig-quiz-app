import { setNewViewState } from '../../states/viewState.js';

const Button = (
  htmlObjects,
  availableAppStates,
  currentAppState,
  buttonData
) => {
  const buttonWrapper = document.createElement('div');
  const button = document.createElement('button');
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');

  buttonWrapper.classList.add('footer-btns-wrapper');
  if (button) {
    legend.textContent = buttonData.content;

    // button.textContent = buttonData.content;
    button.data = buttonData;
    fieldset.classList.add('footer-btns-fieldset');
    button.classList.add('btn', 'btn--footer', `--${buttonData.view}`);

    button.addEventListener('click', () => {
      try {
        currentAppState.currentView = buttonData.view;
        setNewViewState(htmlObjects, currentAppState);
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
};
export default Button;
