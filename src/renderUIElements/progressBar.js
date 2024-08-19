export function updateProgressBar(quizState) {
  const progressBarFill = document.querySelector('.progress-bar-fill');
  quizState.progressPercent =
    ((quizState.currentQuestionIndex + 1) / quizState.currentStateData.length) *
    100;
  progressBarFill.style.width = `${quizState.progressPercent}%`;
}
