export function updateProgressBar(data, currentQuestion) {
  const progressBarFill = document.querySelector('.progress-bar-fill');
  const progressPercent = (currentQuestion / data.length) * 100;
  progressBarFill.style.width = `${progressPercent}%`;
}
