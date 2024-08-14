export function setCurrentViewIndicator(appState, currentQuiz) {
  // console.log(currentQuiz);

  const currentQuizIndicator = document.getElementById(
    'current-quiz-indicator'
  );
  const currentViewIndicator = document.getElementById(
    'current-view-indicator'
  );
  if (currentViewIndicator) {
    currentQuizIndicator.textContent =
      currentQuiz.quizName.toUpperCase() + "'s  ";
    currentViewIndicator.textContent = appState.currentView;
    setTimeout(() => {
      currentViewIndicator.classList.add('current-view--changed');
      currentViewIndicator.classList.remove('current-view-indicator');
    }, 0);
    setTimeout(() => {
      currentViewIndicator.classList.add('current-view-indicator');
      currentViewIndicator.classList.remove('current-view--changed');
    }, 1000);
  } else {
    console.error('current-view-indicator element not found');
  }
}
