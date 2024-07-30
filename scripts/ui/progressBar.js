export function updateProgressBar(
  currentsStateData,
  currentQuestion,
  progressPercent
) {
  const progressBarFill = document.querySelector('.progress-bar-fill');
  progressPercent = (currentQuestion / currentsStateData.length) * 100;
  progressBarFill.style.width = `${progressPercent}%`;
}
