import { getBookMarkedItems } from '../scripts/views/renderBookMarkedItems.js';
const iconBaseUrl = new URL(
  // 'https://github.com/AntoineFachez/anthony-zornig-quiz-app/blob/features/assets/icons/',
  'https://raw.githubusercontent.com/AntoineFachez/anthony-zornig-quiz-app/features/assets/icons/',
  // 'https://raw.githubusercontent.com/AntoineFachez/anthony-zornig-quiz-app/features/assets/icons/',
  import.meta.url
);

// const iconBaseUrl =
//   'https://raw.githubusercontent.com/AntoineFachez/anthony-zornig-quiz-app/features/assets/icons/';

const bookmark_darkMode_active = `${iconBaseUrl}bookmark_darkMode_active.png`;
const bookmark_darkMode_inactive = `${iconBaseUrl}bookmark_darkMode_inactive.png`;
const bookmark_lightMode_active = `${iconBaseUrl}bookmark_lightMode_active.png`;
const bookmark_lightMode_inactive = `${iconBaseUrl}bookmark_lightMode_inactive.png`;
const darkMode_active = `${iconBaseUrl}darkMode_active.png`;
const darkMode_inactive = `${iconBaseUrl}darkMode_inactive.png`;
const home_lightMode_active = `${iconBaseUrl}home_lightMode_active.png`;
const home_lightMode_inactive = `${iconBaseUrl}home_lightMode_inactive.png`;
const home_darkMode_active = `${iconBaseUrl}home_darkMode_active.png`;
const home_darkMode_inactive = `${iconBaseUrl}home_darkMode_inactive.png`;
const profile_lightMode_active = `${iconBaseUrl}profile_lightMode_active.png`;
const profile_lightMode_inactive = `${iconBaseUrl}profile_lightMode_inactive.png`;
const Profile_darkMode_active = `${iconBaseUrl}Profile_darkMode_active.png`;
const Profile_darkMode_inactive = `${iconBaseUrl}Profile_darkMode_inactive.png`;
const Question_darkMode = `${iconBaseUrl}Question_darkMode.png`;
const question_lightMode = `${iconBaseUrl}question_lightMode.png`;
const newFolder_darkMode_active = `${iconBaseUrl}newFolder_darkMode_active.png`;
const newFolder_darkMode_inactive = `${iconBaseUrl}newFolder_darkMode_inactive.png`;
const newFolder_lightMode_active = `${iconBaseUrl}newFolder_lightMode_active.png`;
const newFolder_lightMode_inactive = `${iconBaseUrl}newFolder_lightMode_inactive.png`;

export const availableAppStates = [
  {
    content: 'Home',
    view: 'quiz',
    //currentView: true,
    callFn: null,
    icons: {
      darkMode: {
        active: `<svg fill="currentColor" width="1.6rem" height="1.6rem" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z"/></svg>`,

        inactive: `<svg fill="currentColor" width="1.6rem" height="1.6rem" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z"/></svg>`,
      },

      lightMode: {
        active: `<svg fill="currentColor" width="1.6rem" height="1.6rem" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z"/></svg>`,

        inactive: `<svg fill="currentColor" width="1.6rem" height="1.6rem" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z"/></svg>`,
      },
    },
  },
  {
    content: 'Bookmarks',
    view: 'bookmarked',
    //currentView: false,
    callFn: getBookMarkedItems,
    // callFn: async () => {
    //   try {
    //     const bookmarkedItems = await getBookMarkedItems(); // Assuming getBookMarkedItems returns a Promise
    //     // Render bookmarked items here
    //   } catch (error) {
    //     console.error('Error fetching bookmarks:', error);
    //   }
    // },
    icons: {
      darkMode: {
        active: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
<polygon fill="currentColor" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" points="24,6 8,6 8,26 16,20 24,26 "/>
</svg>`,
        inactive: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
<polygon fill="currentColor" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" points="24,6 8,6 8,26 16,20 24,26 "/>
</svg>`,
      },

      lightMode: {
        active: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
<polygon fill="currentColor" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" points="24,6 8,6 8,26 16,20 24,26 "/>
</svg>`,
        inactive: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
<polygon fill="currentColor" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" points="24,6 8,6 8,26 16,20 24,26 "/>
</svg>`,
      },
    },
  },
  {
    content: 'NewCard',
    view: 'newCard',
    //currentView: false,
    callFn: null,
    icons: {
      darkMode: {
        // active: newFolder_darkMode_active,
        // inactive: newFolder_darkMode_inactive,
        active: `<svg viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
                </svg>`,
        inactive: `<svg viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
                </svg>`,
      },

      lightMode: {
        // active: newFolder_lightMode_active,
        // inactive: newFolder_lightMode_inactive,
        active: `<svg viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
                </svg>`,
        inactive: `<svg viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" stroke="currentColor" stroke-width="2"/>
                </svg>`,
      },
    },
  },
  {
    content: 'Profile',
    view: 'profile',
    //currentView: false,
    callFn: null,
    icons: {
      darkMode: {
        // active: Profile_darkMode_active,
        // inactive: Profile_darkMode_inactive,
        active: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1.8rem" height="1.8rem" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`,
        inactive: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1.8rem" height="1.8rem" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`,
      },

      lightMode: {
        active: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1.8rem" height="1.8rem" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`,
        inactive: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1.8rem" height="1.8rem" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`,
      },
    },
  },

  // {∑
  //   content: 'Somethin Else',
  //   view: 'somethin',
  //   //currentView: false
  // },
];
