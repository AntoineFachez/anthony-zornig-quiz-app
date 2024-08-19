export function setCurrentViewIndicator(appState, currentQuiz) {
  // console.log(currentQuiz);
  const indicatorWrapper = document.createElement('div');
  const currentQuizIndicator = document.createElement('p');
  const currentViewIndicator = document.createElement('p');

  // currentQuizIndicator.setAttribute('data-js', 'current-quiz-indicator');
  // currentViewIndicator.setAttribute('data-js', 'current-view-indicator');

  indicatorWrapper.classList.add('header', 'title');
  currentQuizIndicator.classList.add('title', 'marvel');
  currentViewIndicator.classList.add('current-view-indicator', 'marvel');

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
  indicatorWrapper.append(currentQuizIndicator, currentViewIndicator);
  return indicatorWrapper;
}
