const questionCard = document.querySelector('.question-card p');
const showAnswerButton = document.querySelector('.question-card button');
let data = [
  {
    question:
      'What is the name of the first Marvel Cinematic Universe film, released in 2008?',
    answer: 'Iron Man',
    possibleAnswers: [
      { possibleAnswer: 'The Incredible Hulk' },
      { possibleAnswer: 'Iron Man' },
      { possibleAnswer: 'Captain America: The First Avenger' },
    ],
  },
  {
    question:
      'What is the name of the powerful artifact that Thanos seeks to collect in the MCU?',
    answer: 'Infinity Stones',
    possibleAnswers: [
      { possibleAnswer: 'Infinity Stones' },
      { possibleAnswer: 'Cosmic Cubes' },
      { possibleAnswer: 'Reality Shards' },
    ],
  },
  {
    question: 'What is the real name of the superhero known as Iron Man?',
    answer: 'Tony Stark',
    possibleAnswers: [
      { possibleAnswer: 'Tony Stark' },
      { possibleAnswer: 'Bruce Banner' },
      { possibleAnswer: 'Peter Parker' },
    ],
  },

  {
    question:
      'Which MCU film features the first appearance of the character Black Panther?',
    answer: 'Captain America: Civil War',
    possibleAnswers: [
      { possibleAnswer: 'Black Panther' },
      { possibleAnswer: 'Captain America: Civil War' },
      { possibleAnswer: 'Avengers: Infinity War' },
    ],
  },
  {
    question: "What is the name of Thor's enchanted hammer?",
    answer: 'Mjolnir',
    possibleAnswers: [
      { possibleAnswer: 'Stormbreaker' },
      { possibleAnswer: 'Mjolnir' },
      { possibleAnswer: 'Hofund' },
    ],
  },
  {
    question: 'Which actor portrays the character Captain America in the MCU?',
    answer: 'Chris Evans',
    possibleAnswers: [
      { possibleAnswer: 'Chris Hemsworth' },
      { possibleAnswer: 'Chris Pratt' },
      { possibleAnswer: 'Chris Evans' },
    ],
  },
  {
    question:
      'What is the name of the organization founded by Nick Fury to protect the Earth from various threats in the MCU?',
    answer:
      'S.H.I.E.L.D. (Strategic Homeland Intervention, Enforcement, and Logistics Division)',
    possibleAnswers: [
      {
        possibleAnswer:
          'S.W.O.R.D. (Sentient World Observation and Response Department)',
      },
      {
        possibleAnswer:
          'S.H.I.E.L.D. (Strategic Homeland Intervention, Enforcement, and Logistics Division)',
      },
      { possibleAnswer: 'A.I.M. (Advanced Idea Mechanics)' },
    ],
  },
  {
    question:
      'Which film marks the first appearance of the character Spider-Man in the MCU?',
    answer: 'Captain America: Civil War',
    possibleAnswers: [
      { possibleAnswer: 'Spider-Man: Homecoming' },
      { possibleAnswer: 'Captain America: Civil War' },
      { possibleAnswer: 'Iron Man 2' },
    ],
  },
  {
    question:
      "What is the name of the fictional African nation ruled by T'Challa, also known as Black Panther?",
    answer: 'Wakanda',
    possibleAnswers: [
      { possibleAnswer: 'Zamunda' },
      { possibleAnswer: 'Wakanda' },
      { possibleAnswer: 'Latveria' },
    ],
  },
  {
    question:
      'In which MCU film does the character Thanos finally gather all six Infinity Stones and snap his fingers to wipe out half of all life in the universe?',
    answer: 'Avengers: Infinity War',
    possibleAnswers: [
      { possibleAnswer: 'Avengers: Infinity War' },
      { possibleAnswer: 'Guardians of the Galaxy' },
      { possibleAnswer: 'Avengers: Age of Ultron' },
    ],
  },
  {
    question:
      'What is the name of the super-soldier serum that gave Captain America his abilities?',
    answer: 'Super Soldier Serum',
    possibleAnswers: [
      { possibleAnswer: 'Vita-Ray Serum' },
      { possibleAnswer: 'Super Soldier Serum' },
      { possibleAnswer: 'Infinity Formula' },
    ],
  },
  {
    question: 'Who is the director of the first two Avengers films?',
    answer: 'Joss Whedon',
    possibleAnswers: [
      { possibleAnswer: 'James Gunn' },
      { possibleAnswer: 'The Russo Brothers' },
      { possibleAnswer: 'Joss Whedon' },
    ],
  },
  {
    question:
      'What is the name of the eye patch-wearing director of S.H.I.E.L.D.?',
    answer: 'Nick Fury',
    possibleAnswers: [
      { possibleAnswer: 'Phil Coulson' },
      { possibleAnswer: 'Maria Hill' },
      { possibleAnswer: 'Nick Fury' },
    ],
  },
  {
    question:
      "Which Infinity Stone is hidden within Loki's scepter in 'The Avengers'?",
    answer: 'Mind Stone',
    possibleAnswers: [
      { possibleAnswer: 'Space Stone' },
      { possibleAnswer: 'Mind Stone' },
      { possibleAnswer: 'Time Stone' },
    ],
  },
  {
    question: 'What species is the character Groot?',
    answer: 'Flora Colossus',
    possibleAnswers: [
      { possibleAnswer: 'Arboreal Alien' },
      { possibleAnswer: 'Flora Colossus' },
      { possibleAnswer: 'Planetary Ent' },
    ],
  },
];
let currentQuestion = 0;

const mainSection = document.querySelector('.main-section');

function displayCurrentQuestion() {
  mainSection.innerHTML = '';
  const currentQuestionNumber = document.createElement('p');
  currentQuestionNumber.textContent = currentQuestion;
  currentQuestionNumber.setAttribute('aria-label', currentQuestion);
  mainSection.appendChild(currentQuestionNumber);
  if (currentQuestion < data.length) {
    const card = createQuestionCard(data[currentQuestion]);
    mainSection.appendChild(card);
    currentQuestion++;
  } else {
    allQuestionsAnswered = true;
    displayResult();
  }
}

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
function createQuestionCard(item) {
  const questionCard = document.createElement('section');
  questionCard.classList.add('question-card');

  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btn-wrapper');

  const bookmarkDiv = document.createElement('div');
  bookmarkDiv.classList.add('bookmark');

  const questionText = document.createElement('p');
  questionText.textContent = item.question;
  questionText.classList.add('question-card--text');
  questionText.setAttribute('aria-label', questionText);

  const resultText = document.createElement('p');
  resultText.setAttribute('aria-label', resultText);

  const showAnswerButton = document.createElement('button');
  showAnswerButton.textContent = 'Show Answer';

  showAnswerButton.setAttribute(
    'aria-label',
    'Show answer for question ' + currentQuestion
  );

  showAnswerButton.addEventListener('click', () => {
    questionText.textContent = item.answer;
    showAnswerButton.disabled = true;
  });

  item.possibleAnswers.forEach((possibleAnswer) => {
    const multipleChoiceButton = document.createElement('button');
    multipleChoiceButton.textContent = possibleAnswer.possibleAnswer;
    multipleChoiceButton.classList.add('btn--multiple-choice');
    multipleChoiceButton.setAttribute(
      'aria-label',
      possibleAnswer.possibleAnswer
    );

    multipleChoiceButton.addEventListener('click', () => {
      if (possibleAnswer.possibleAnswer === item.answer) {
        resultText.textContent = 'Correct!';
      } else {
        resultText.textContent = 'Incorrect!';
      }

      questionCard.querySelectorAll('button').forEach((btn) => {
        btn.disabled = true;
      });
      setTimeout(displayCurrentQuestion, 1000);
    });
    btnWrapper.appendChild(multipleChoiceButton);

    questionCard.appendChild(btnWrapper);
  });

  questionCard.appendChild(questionText);
  questionCard.appendChild(resultText);
  questionCard.appendChild(bookmarkDiv);
  questionCard.appendChild(showAnswerButton);

  return questionCard;
}
