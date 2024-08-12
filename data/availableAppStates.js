import { getBookMarkedItems } from '../scripts/views/renderBookMarkedItems.js';

export const availableAppStates = [
  {
    content: 'Home',
    view: 'quiz',
    //currentView: true,
    callFn: null,
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
  },
  {
    content: 'NewCard',
    view: 'newCard',
    //currentView: false,
    callFn: null,
  },
  {
    content: 'Profile',
    view: 'profile',
    //currentView: false,
    callFn: null,
  },
  // {∑
  //   content: 'Somethin Else',
  //   view: 'somethin',
  //   //currentView: false
  // },
];
