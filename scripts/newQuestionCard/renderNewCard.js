import { storeNewDataToLS } from '../states/manageLSData.js';
import { callSiteByURL, copyJSONToClipboard } from '../utils/helpers.js';

const mainSection = document.querySelector('.main-section');

export function renderNewCard(createSelector, appState, quizData) {
  console.log(quizData);

  const quizDataName = quizData.lsObjectName;
  mainSection.innerHTML = '';
  const newCard = document.createElement('section');

  const newQuestion = createNewQuestion();
  const possibleAnswersWrapper = createPossibleAnswers();
  const footWrapper = document.createElement('div');
  const cardPicture = createImageLink();
  const buttonSubmit = createSubmitButton(quizDataName);

  newCard.classList.add('new-question-card');

  footWrapper.classList.add('foot-wrapper');

  // footWrapper.append(handleUseGeminiForSuggestions());
  footWrapper.append(buttonSubmit);

  newCard.append(cardPicture);
  newCard.append(newQuestion);
  newCard.append(possibleAnswersWrapper);
  newCard.append(footWrapper);

  const selector = createSelector(appState, quizData);

  mainSection.append(newCard, selector);
}
export function createNewQuestion() {
  const newQuestionWrapper = document.createElement('div');
  const inputFieldNewQuestion = document.createElement('input');
  const labelNewQuestion = document.createElement('label');

  labelNewQuestion.classList.add('label-new-question');
  newQuestionWrapper.classList.add('new-question-wrapper');

  inputFieldNewQuestion.setAttribute('type', 'text');
  inputFieldNewQuestion.setAttribute('id', 'newQuestion');
  labelNewQuestion.setAttribute('for', 'newQuestion');
  labelNewQuestion.textContent = 'New Question';

  newQuestionWrapper.append(labelNewQuestion);
  newQuestionWrapper.append(inputFieldNewQuestion);
  return newQuestionWrapper;
}
export function createPossibleAnswers() {
  const amountPossibleAnswers = 3;
  const possibleAnswersWrapper = document.createElement('div');
  const possibleAnswersTitle = document.createElement('p');
  possibleAnswersTitle.textContent = 'Possible Answers';
  possibleAnswersWrapper.append(possibleAnswersTitle);

  possibleAnswersTitle.classList.add('label-new-question');
  possibleAnswersWrapper.classList.add(
    'new-question__possible-answers-wrapper'
  );

  for (let i = 0; i < amountPossibleAnswers; i++) {
    const possibleAnswerInput = document.createElement('input');
    const labelPossibleAnswer = document.createElement('label');

    possibleAnswerInput.setAttribute('type', 'text');
    possibleAnswerInput.setAttribute('id', `possibleAnswer${i}`);
    labelPossibleAnswer.setAttribute('for', `possibleAnswer${i}`);

    labelPossibleAnswer.textContent = `Possible Answer ${i} of ${amountPossibleAnswers}`;

    possibleAnswersWrapper.append(possibleAnswerInput);
  }

  return possibleAnswersWrapper;
}
export function createImageLink() {
  const cardImageWrapper = document.createElement('div');
  const cardPicture = document.createElement('img');
  const inputFieldImageLink = document.createElement('input');
  const labelImageLink = document.createElement('label');

  labelImageLink.classList.add('label-new-question');

  inputFieldImageLink.setAttribute('id', `imageLinkInput`);
  labelImageLink.setAttribute('for', 'imageLinkInput');
  labelImageLink.textContent = 'Drop Image Link';
  cardPicture.classList.add('newCard-image');
  inputFieldImageLink.addEventListener('blur', (e) => {
    cardPicture.alt = 'imageLink';
    cardPicture.src = setImageLink(e);
  });

  cardImageWrapper.append(labelImageLink);
  cardImageWrapper.append(cardPicture);
  cardImageWrapper.append(inputFieldImageLink);

  return cardImageWrapper;
}
export function createSubmitButton(quizDataName) {
  const buttonSubmit = document.createElement('button');
  const alert = buttonSubmit.addEventListener('click', () =>
    storeNewDataToLS(quizDataName)
  );
  console.log(alert);

  buttonSubmit.classList.add('btn');
  buttonSubmit.textContent = 'Save';

  return buttonSubmit;
}
export function setImageLink(e) {
  e.preventDefault();
  console.log(e.target.value);

  return e.target.value;
}
// export function handleUseGeminiForSuggestions(
//   createSelector,
//   currentAppState,
//   currentQuizState
// ) {
//   const mainSection = document.querySelector('.main-section');
//   mainSection.innerHTML = '';
//   const geminiWrapper = document.createElement('div');
//   geminiWrapper.classList.add('gemini-wrapper');

//   const selector = createSelector(currentAppState, currentQuizState);
//   console.log(selector);

//   const goToGeminiButton = document.createElement('button');
//   goToGeminiButton.classList.add('btn');
//   goToGeminiButton.textContent = 'https://gemini.google.com';

//   const referenceData =
//     currentQuizState.geminiGenerateInstructionPrompt +
//     '… ' +
//     JSON.stringify(currentQuizState.currentStateData);

//   goToGeminiButton.addEventListener('click', () =>
//     handleGetSuggestionsAtGeminiSite(referenceData)
//   );

//   geminiWrapper.append(selector);
//   geminiWrapper.append(goToGeminiButton);
//   mainSection.append(geminiWrapper);
// }
export function handleGetSuggestionsAtGeminiSite(referenceData) {
  const url = 'https://gemini.google.com/app/c28b5bf17c1b8767';
  console.log('clicked', referenceData);
  if (
    confirm(
      'COPY prompt to clipbaord & CALL Gemini.com ?\n\nOver there: \n\nPASTE instructions and data into prompt field.\nHit ENTER.'
    )
  ) {
    copyJSONToClipboard(referenceData);
    callSiteByURL(url);
  } else {
    // Do nothing!
  }
}
