import { storeNewDataToLS } from '../states/manageLSData.js';

const mainSection = document.querySelector('.main-section');

export function renderNewCard(quizData) {
  console.log(quizData.lsObjectName);

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

  newCard.append(cardPicture);
  footWrapper.append(buttonSubmit);
  newCard.append(newQuestion);
  newCard.append(possibleAnswersWrapper);
  newCard.append(footWrapper);

  mainSection.append(newCard);
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
  // cardPicture.classList.add('newCard-image');
  const imageLink = inputFieldImageLink.addEventListener('drop', (e) =>
    setImageLink(e)
  );
  // cardPicture.src = imageLink;
  cardPicture.src = imageLink;
  cardPicture.alt = 'imageLink';

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
