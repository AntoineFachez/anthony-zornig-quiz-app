import { createQuestionCard } from '../questionCard/createQuestionCard.js';
import { data } from '../../data/data.js';
let currentStateData;
if (!localStorage.getItem('quizData')) {
  data;

  localStorage.setItem('quizData', JSON.stringify(data));
  currentStateData = data;
} else {
  currentStateData = JSON.parse(localStorage.getItem('quizData'));
}
const mainSection = document.querySelector('#main-section');
export function setCurrentView(appState) {
  const currentViewIndicator = document.getElementById('current-view');

  if (currentViewIndicator) {
    currentViewIndicator.textContent = appState.currentView;
    setTimeout(() => {
      currentViewIndicator.classList.add('current-view--changed');
      currentViewIndicator.classList.remove('current-view');
    }, 0);
    setTimeout(() => {
      currentViewIndicator.classList.add('current-view');
      currentViewIndicator.classList.remove('current-view--changed');
    }, 1000);
  } else {
    console.error('current-view element not found');
  }
  console.log(appState);
  if (appState.currentView === 'profile') {
    setInitialAppState(appState);
  }
}
export function setView() {
  const mainSection = document.querySelector('.main-section');
  mainSection.innerHTML = '';
}
export function setInitialAppState(
  appState,
  mainSection,
  currentQuestionIndex,
  currentStateData,
  createButtonArrayCard,
  countCorrectAnswers,
  correctAnswersText,
  createQuestionCard,
  createCurrentQuestion,
  updateProgressBar,
  progressPercent
) {
  if (appState.currentView === 'quiz') {
    console.log('appState', appState);
    createCurrentQuestion(
      mainSection,
      currentQuestionIndex,
      currentStateData,
      createButtonArrayCard,
      countCorrectAnswers,
      correctAnswersText,
      createQuestionCard,
      updateProgressBar,
      progressPercent
    );
  } else if (appState.currentView === 'bookmark') {
    console.log('appState', appState);
    console.log(bookmarkedArray);

    // currentStateData?.forEach((item) => {
    //   const card = createQuestionCard(
    //     currentStateData,
    //     mainSection,
    //     item,
    //     currentQuestionIndex,
    //     createCurrentQuestion,
    //     createButtonArrayCard
    //   );
    //   mainSection.appendChild(card);
    // });
    // displayAllBookMarked(createButtonArrayCard);
  } else if (appState.currentView === 'profile') {
    const mainSection = document.querySelector('.main-section');
    mainSection.innerHTML = '';
  }
}
