// import { initGame, createCurrentQuestion } from '../index.js';

// export function displayResult(
//   mainSection,
//   currentStateData,
//   currentQuestionIndex,
//   countCorrectAnswers,
//   correctAnswersText
// ) {
//   if (!correctAnswersText) {
//     correctAnswersText = document.createElement('p');
//   }
//   // console.log('dataLength', countCorrectAnswers, currentStateData.length);
//   if (
//     currentQuestionIndex === countCorrectAnswers &&
//     countCorrectAnswers === currentStateData.length
//   ) {
//     correctAnswersText.textContent = `You answered ${countCorrectAnswers} of ${currentQuestionIndex} correct. You know your shit! Thanks for playing!`;
//     correctAnswersText.classList.add('wow-a-winner');
//   } else if (countCorrectAnswers / currentQuestionIndex >= 0.8) {
//     // 80% or more correct
//     correctAnswersText.textContent = `You answered ${countCorrectAnswers} of ${currentQuestionIndex} correct. Well done! Thanks for playing!`;
//     correctAnswersText.classList.add('a-frequent-marvel-watcher');
//   } else {
//     correctAnswersText.textContent = `You answered ${countCorrectAnswers} of ${currentQuestionIndex} correct. Keep watching Marvel. It's worth it! Thanks for playing!`;
//     correctAnswersText.classList.add('keep-on-watchin');
//   }
//   const replayButton = document.createElement('button');
//   replayButton.textContent = 'Replay';

//   replayButton.addEventListener(
//     'click',
//     () => createCurrentQuestion()
//     // resetGame()
//   );

//   mainSection.appendChild(correctAnswersText);
//   mainSection.appendChild(replayButton);
//   console.log(currentQuestionIndex);
// }
