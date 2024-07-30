import { createQuestionCard } from './createQuestionCard.js';
import { displayCurrentQuestion } from './display.js';
import { data } from './data.js';

document.addEventListener('DOMContentLoaded', function () {
  const dataUrl = new URL('/data/questions.js', import.meta.url);
  // fetch('../data/questions.json')
  // fetch(
  //   'https://github.com/AntoineFachez/anthony-zornig-quiz-app/blob/main/data/questions.json'
  // )
  //   fetch(dataUrl)
  //     .then((response) => response.json())
  //     .then((fetchedData) => {
  //       data = fetchedData;
  //       console.log('data', data);
  data?.forEach((item) => {
    const card = createQuestionCard(item);
    mainSection.appendChild(card);
  });
  displayCurrentQuestion();
});
