// export function displayCurrentQuestion(
//   mainSection,
//   currentsStateData,
//   currentQuestion,
//   correctAnswers,
//   correctAnswersText,
//   createQuestionCard,
//   createButtons,
//   updateProgressBar
// ) {
//   mainSection.innerHTML = '';

//   // correctAnswersText.classList.add('question-card--text');
//   // correctAnswersText.setAttribute('aria-label', correctAnswersText);

//   const currentQuestionNumber = document.createElement('p');
//   currentQuestionNumber.textContent = currentQuestion;
//   currentQuestionNumber.setAttribute('aria-label', currentQuestion);
//   if (currentQuestion < currentsStateData.length) {
//     const card = createQuestionCard(
//       mainSection,
//       currentsStateData[currentQuestion],
//       currentQuestion,
//       displayCurrentQuestion,
//       createButtons
//       // correctAnswers
//     );
//     mainSection.appendChild(card);
//     currentQuestion++;
//     updateProgressBar(currentsStateData, currentQuestion);
//   } else {
//     displayResult(
//       mainSection,
//       currentsStateData,
//       currentQuestion,
//       correctAnswers,
//       correctAnswersText
//     );
//     allQuestionsAnswered = true;
//   }
// }
