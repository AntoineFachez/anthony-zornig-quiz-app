export function displayCurrentQuestion() {
  mainSection.innerHTML = '';
  const currentQuestionNumber = document.createElement('p');
  currentQuestionNumber.textContent = currentQuestion;
  currentQuestionNumber.setAttribute('aria-label', currentQuestion);
  mainSection.appendChild(currentQuestionNumber);
  if (currentQuestion < data.length) {
    const card = createQuestionCard(data[currentQuestion]);
    mainSection.appendChild(card);
    updateProgressBar();
    currentQuestion++;
    console.log(currentQuestion);
  } else {
    allQuestionsAnswered = true;
    displayResult();
  }
}
function updateProgressBar() {
  const progressBarFill = document.querySelector('.progress-bar-fill');
  const progressPercent = ((currentQuestion + 1) / data.length) * 100;
  progressBarFill.style.width = `${progressPercent}%`;
}
// document.addEventListener('DOMContentLoaded', function () {
//   const dataUrl = new URL('/data/questions.js', import.meta.url);
//   // fetch('../data/questions.json')
//   // fetch(
//   //   'https://github.com/AntoineFachez/anthony-zornig-quiz-app/blob/main/data/questions.json'
//   // )
//   //   fetch(dataUrl)
//   //     .then((response) => response.json())
//   //     .then((fetchedData) => {
//   //       data = fetchedData;
//   //       console.log('data', data);
//   data?.forEach((item) => {
//     const card = createQuestionCard(item);
//     mainSection.appendChild(card);
//   });
//   displayCurrentQuestion();
// });
