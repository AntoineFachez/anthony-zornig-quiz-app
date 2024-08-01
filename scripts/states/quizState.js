import { manageDataLS } from '../../data/data.js';
// // import { createCurrentQuestion } from './questionCard/createCurrentQuestion.js';
// import { createQuestionCard } from './questionCard/createQuestionCard.js';
// import { updateProgressBar } from './ui/progressBar.js';
// import { displayResult } from './ui/displayResult.js';
import { getBookMarkedItems } from '../views/renderBookMarkedItems.js';
// import { setCurrentView, setInitialAppState } from './ui/currentView.js';
// import {
//   initHomeButton,
//   initBookMarkButton,
//   initProfileButton,
// } from './ui/footerButtons.js';

// import { displayAllBookMarked } from './views/bookMarkedItems.js';
// import { renderProfile } from './ui/renderProfile.js';
// // import { initQuiz } from './gameState/gameState.js';
// // import { createButtonArrayCard } from './createButtonArrayCard.js';

// export const quizState = {
//   allQuestionsAnswered: false,
//   currentStateData: manageDataLS(),
//   bookmarked: getBookMarkedItems(), //* counter in the footerButton,
//   currentQuestionIndex: 0,
//   countCorrectAnswers: 0,
//   progressPercent: 0,
//   correctAnswersText: '',
// };

// const mainSection = document.querySelector('.main-section');
// const bookmarkedArray = getBookMarkedItems();

// const currentQuestionNumber = document.createElement('p');
// currentQuestionNumber.classList.add('current-question-number');

// initQuiz();

// export function initQuiz() {
//   mainSection.innerHTML = '';

//   console.log('clkicked');

//   document.addEventListener('DOMContentLoaded', function () {
//     manageDataLS(currentStateData);

//     initHomeButton(appState);
//     initBookMarkButton(appState);
//     initProfileButton(appState);
//     initSettings(false);
//     demoState();
//     initSettings(false);
//     setCurrentView(appState);

//     setInitialAppState(
//       appState,
//       mainSection,
//       currentQuestionIndex,
//       currentStateData,
//       createButtonArrayCard,
//       countCorrectAnswers,
//       correctAnswersText,
//       createQuestionCard,
//       createCurrentQuestion,
//       updateProgressBar,
//       progressPercent
//     );
//   });
//   document.addEventListener('click', (event) => {
//     //   setCurrentView(appState, initSettings);
//     initSettings(false);
//     if (appState.currentView === 'quiz') {
//       setInitialAppState(
//         appState,
//         mainSection,
//         0,
//         currentStateData,
//         createButtonArrayCard,
//         countCorrectAnswers,
//         correctAnswersText,
//         createQuestionCard,
//         createCurrentQuestion,
//         updateProgressBar,
//         progressPercent
//       );
//     } else if (appState.currentView === 'bookmarked') {
//       mainSection.innerHTML = '';
//       const array = getBookMarkedItems();
//       console.log(array);
//       const generatedBookMarkedItems = [];
//       array.forEach((item) => {
//         const card = createQuestionCard(
//           currentStateData,
//           mainSection,
//           item,
//           currentQuestionIndex,
//           createCurrentQuestion,
//           createButtonArrayCard
//         );
//         generatedBookMarkedItems.push(card);
//       });
//       // mainSection.appendChild(generatedBookMarkedItems);
//     } else if (appState.currentView === 'profile') {
//       renderProfile();
//       initSettings(true);
//     }
//   });
// }
// export function initSettings(state) {
//   const checkBox = document.getElementById('toggleDarkMode');
//   if (state) {
//     checkBox.classList.add('settings-visible');
//     checkBox.classList.remove('settings-hidden');
//   } else {
//     checkBox.classList.add('settings-hidden');
//     checkBox.classList.remove('settings-visible');
//   }
// }

// export function createCurrentQuestion() {
//   // mainSection
//   // currentQuestionIndex,
//   // currentStateData,
//   // createButtonArrayCard,
//   // countCorrectAnswers,
//   // correctAnswersText,
//   // createQuestionCard,
//   // updateProgressBar,
//   // progressPercent
//   mainSection.innerHTML = '';

//   currentQuestionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
//   currentQuestionNumber.setAttribute('aria-label', currentQuestionIndex);

//   if (currentQuestionIndex < currentStateData?.length) {
//     const card = createQuestionCard(
//       currentStateData,
//       mainSection,
//       currentStateData[currentQuestionIndex],
//       currentQuestionIndex,
//       createCurrentQuestion,
//       createButtonArrayCard
//     );
//     mainSection.appendChild(card);
//     mainSection.appendChild(currentQuestionNumber);
//     currentQuestionIndex++;
//     updateProgressBar(currentStateData, currentQuestionIndex, progressPercent);
//   } else {
//     displayResult(
//       mainSection,
//       currentStateData,
//       currentQuestionIndex,
//       countCorrectAnswers,
//       correctAnswersText
//     );
//     allQuestionsAnswered = true;
//   }
// }

// export function createButtonArrayCard(
//   item,
//   questionCard,
//   createCurrentQuestion,
//   resultText
// ) {
//   const btnWrapper = document.createElement('div');
//   btnWrapper.classList.add('btn-wrapper');

//   item.possibleAnswers.forEach((possibleAnswer) => {
//     const multipleChoiceButton = document.createElement('button');
//     multipleChoiceButton.textContent = possibleAnswer.possibleAnswer;
//     multipleChoiceButton.classList.add('btn');
//     multipleChoiceButton.classList.add('btn--multiple-choice');
//     multipleChoiceButton.setAttribute(
//       'aria-label',
//       possibleAnswer.possibleAnswer
//     );

//     multipleChoiceButton.addEventListener('click', () => {
//       if (possibleAnswer.possibleAnswer === item.answer) {
//         resultText.textContent = 'Correct!';
//         multipleChoiceButton.classList.add('btn--multiple-choice--true');
//         countCorrectAnswers++;
//       } else {
//         resultText.textContent = 'Incorrect!';
//         multipleChoiceButton.classList.add('btn--multiple-choice--false');
//       }
//       questionCard.querySelectorAll('button').forEach((btn) => {
//         btn.disabled = true;
//       });

//       setTimeout(
//         () =>
//           createCurrentQuestion(
//             mainSection,
//             currentQuestionIndex,
//             currentStateData,
//             createButtonArrayCard,
//             countCorrectAnswers,
//             correctAnswersText,
//             createQuestionCard,
//             updateProgressBar,
//             progressPercent
//           ),
//         800
//       );
//     });
//     btnWrapper.appendChild(multipleChoiceButton);
//     questionCard.appendChild(btnWrapper);
//   });
// }
// export function demoState() {
//   const setDemoButtom = document.createElement('button');
//   setDemoButtom.classList.add('btn');
//   setDemoButtom.classList.add('btn--demoState');
//   setDemoButtom.addEventListener(
//     'click',
//     () => (currentQuestionIndex = data.length - 1)
//   );
//   setDemoButtom.textContent = 'go to end';
//   mainSection.appendChild(setDemoButtom);
// }
