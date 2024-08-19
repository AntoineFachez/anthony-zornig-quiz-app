import { initFooterButtons } from '../../renderUIElements/footerButtons.js';
import { getCurrentAppState } from '../../states/appState.js';

const Footer = (htmlObjects, availableAppStates) => {
  const footerButtons = initFooterButtons(
    htmlObjects,
    availableAppStates,
    getCurrentAppState()
  );

  console.log('init footer', footerButtons);
  htmlObjects.footer.classList.add('footer');

  htmlObjects.footer.append(footerButtons);

  console.log('init footer', htmlObjects.footer);
  return footerButtons;
};
export default Footer;
