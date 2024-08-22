export const ProgressBar = (htmlObjects, quizState) => {
  const progressBar = htmlObjects.progressBar;
  progressBar.classList.add('progress-bar');
  const progressBarFilled = updateProgressBar(quizState);
  progressBar.append(progressBarFilled);
  console.log(progressBar);

  return progressBar;
};

export function updateProgressBar(quizState) {
  const progressBarFilled = document.createElement('div');
  progressBarFilled.classList.add('progress-bar-fill');
  // const progressBarFill = document.querySelector('.progress-bar-fill');
  quizState.progressPercent =
    ((quizState.currentQuestionIndex + 1) / quizState.currentStateData.length) *
    100;

  progressBarFilled.style.width = `${quizState.progressPercent}%`;
}
