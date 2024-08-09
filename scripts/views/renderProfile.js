// import { profileData} from '../../data/dataMCU.js';
import { profileData } from '../../data/profileData.js';
import { createToggleButton } from '../renderUIElements/darkModeToggler.js';
const mainSection = document.querySelector('.main-section');

export function renderProfile() {
  mainSection.innerHTML = '';
  const profile = document.createElement('section');

  const headWrapper = document.createElement('div');
  const bodyWrapper = document.createElement('div');
  const linksWrapper = document.createElement('div');
  const footWrapper = document.createElement('div');

  const profilePicture = document.createElement('img');
  const jsImage = document.createElement('img');

  const name = document.createElement('p');
  const aboutText = document.createElement('p');

  profile.classList.add('profile-card');

  headWrapper.classList.add('head-wrapper');
  bodyWrapper.classList.add('body-wrapper');
  linksWrapper.classList.add('links-wrapper');
  footWrapper.classList.add('foot-wrapper');

  profilePicture.classList.add('profile-image');

  name.classList.add('name');
  aboutText.classList.add('about-text');

  name.textContent = profileData.name;
  profilePicture.alt = profileData.profileImage.alt;
  profilePicture.src = profileData.profileImage.url;

  profileData.misc.images.forEach((element) => {
    jsImage.classList.add('js-picture');
    jsImage.src = element.url;
    jsImage.alt = element.alt;
  });

  aboutText.innerHTML = profileData.about;
  aboutText.appendChild(jsImage);

  const links = [];
  profileData.links.forEach((element) => {
    const aHrefButton = document.createElement('button');
    const aHref = document.createElement('a');

    aHref.href = element.href;
    aHref.textContent = element.textContent;

    aHrefButton.classList.add('btn');
    aHrefButton.classList.add('aHrefButton');
    aHrefButton.classList.add(element.styleClass);
    aHref.classList.add('aHref');

    aHrefButton.appendChild(aHref);
    linksWrapper.appendChild(aHrefButton);

    links.push(aHrefButton);
  });

  const darkModeToggle = createToggleButton();

  headWrapper.appendChild(profilePicture);
  headWrapper.appendChild(name);

  bodyWrapper.appendChild(aboutText);

  profile.appendChild(headWrapper);
  profile.appendChild(bodyWrapper);
  profile.appendChild(footWrapper);
  profile.appendChild(linksWrapper);
  // profile.appendChild(darkModeToggle);

  // if (links.length > 0) {
  //   links.forEach((link) => {
  //     footWrapper.appendChild(link);
  //   });
  // }
  mainSection.appendChild(profile);
}
