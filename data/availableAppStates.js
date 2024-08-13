import { getBookMarkedItems } from '../scripts/views/renderBookMarkedItems.js';

const bookmark_darkMode_active = 'icons/bookmark_darkMode_active.png';
const bookmark_darkMode_inactive = 'icons/bookmark_darkMode_inactive.png';
const bookmark_lightMode_active = 'icons/bookmark_lightMode_active.png';
const bookmark_lightMode_inactive = 'icons/bookmark_lightMode_inactive.png';
const darkMode_active = 'icons/darkMode_active.png';
const darkMode_inactive = 'icons/darkMode_inactive.png';
const home_lightMode_active = 'icons/home_lightMode_active.png';
const home_lightMode_inactive = 'icons/home_lightMode_inactive.png';
const home_darkMode_active = 'icons/home_darkMode_active.png';
const home_darkMode_inactive = 'icons/home_darkMode_inactive.png';
const profile_lightMode_active = 'icons/profile_lightMode_active.png';
const profile_lightMode_inactive = 'icons/profile_lightMode_inactive.png';
const Profile_darkMode_active = 'icons/Profile_darkMode_active.png';
const Profile_darkMode_inactive = 'icons/Profile_darkMode_inactive.png';
const Question_darkMode = 'icons/Question_darkMode.png';
const question_lightMode = 'icons/question_lightMode.png';
const newFolder_darkMode_active = 'icons/newFolder_darkMode_active.png';
const newFolder_darkMode_inactive = 'icons/newFolder_darkMode_inactive.png';
const newFolder_lightMode_active = 'icons/newFolder_lightMode_active.png';
const newFolder_lightMode_inactive = 'icons/newFolder_lightMode_inactive.png';

export const availableAppStates = [
  {
    content: 'Home',
    view: 'quiz',
    //currentView: true,
    callFn: null,
    icons: {
      darkMode: {
        active: home_darkMode_active,
        // active: function updateButtonIcon(home_darkMode_active) {
        //   button.style.backgroundImage = `url(${home_darkMode_active})`;
        //   // Or, if using CSS classes, update the class with the new icon path
        // },
        inactive: home_darkMode_inactive,
      },

      lightMode: {
        active: home_lightMode_active,
        inactive: home_lightMode_inactive,
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
        active: bookmark_darkMode_active,
        inactive: bookmark_darkMode_inactive,
      },

      lightMode: {
        active: bookmark_lightMode_active,
        inactive: bookmark_lightMode_inactive,
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
        active: newFolder_darkMode_active,
        inactive: newFolder_darkMode_inactive,
      },

      lightMode: {
        active: newFolder_lightMode_active,
        inactive: newFolder_lightMode_inactive,
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
        active: Profile_darkMode_active,
        inactive: Profile_darkMode_inactive,
      },

      lightMode: {
        active: profile_lightMode_active,
        inactive: profile_lightMode_inactive,
      },
    },
  },

  // {∑
  //   content: 'Somethin Else',
  //   view: 'somethin',
  //   //currentView: false
  // },
];
