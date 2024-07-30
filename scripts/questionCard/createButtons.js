// export function createButtons(
//   item,
//   questionCard,
//   displayCurrentQuestion,
//   resultText,
//   correctAnswers
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
//         correctAnswers++;
//         console.log(correctAnswers);
//       } else {
//         resultText.textContent = 'Incorrect!';
//       }

//       questionCard.querySelectorAll('button').forEach((btn) => {
//         btn.disabled = true;
//       });
//       setTimeout(displayCurrentQuestion, 1000);
//     });
//     btnWrapper.appendChild(multipleChoiceButton);

//     questionCard.appendChild(btnWrapper);
//   });
// }
