import { manageLSData } from '../scripts/states/manageLSData.js';

export const data = [
  {
    question:
      "Welcher Fußballspieler hat die meisten Ballon d'Or-Auszeichnungen gewonnen?",
    answer: 'Lionel Messi',
    imgUrl:
      'https://www.zdf.de/assets/wm-2022-argentinien-frankreich-lionel-messi-100~3840x2160?cb=1677512609741',
    imgAlt: "Lionel Messi Ballon d'Or",
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Christiano Ronaldo' },
      { possibleAnswer: 'Lionel Messi' },
      { possibleAnswer: 'Kylian Mbappé' },
    ],
  },
  {
    question:
      'Welcher Spieler hält den Rekord für die meisten Tore in einer einzelnen Weltmeisterschaft?',
    answer: 'Just Fontaine',
    imgUrl:
      'https://static.bnn.de/sport/urn-newsml-dpacom-20090101-230301-99-784642-d7t6kp/alternates/LANDSCAPE_16x9_688/urn-newsml-dpacom-20090101-230301-99-784642',
    imgAlt: 'Just Fontaine World Cup',
    bookMarkState: true,
    possibleAnswers: [
      { possibleAnswer: 'Pelé' },
      { possibleAnswer: 'Just Fontaine' },
      { possibleAnswer: 'Gerd Müller' },
    ],
  },
  {
    question: 'In welchem Jahr fand die erste Fußball-Weltmeisterschaft statt?',
    answer: '1930',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/b/bf/Uruguay_goal_v_argentina_1930.jpg',
    imgAlt: 'First World Cup 1930',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: '1926' },
      { possibleAnswer: '1930' },
      { possibleAnswer: '1934' },
    ],
  },
  {
    question: 'Welcher Verein hat die meisten Champions-League-Titel gewonnen?',
    answer: 'Real Madrid',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/de/thumb/3/3f/Real_Madrid_Logo.svg/800px-Real_Madrid_Logo.svg.png',
    imgAlt: 'Real Madrid Champions League',
    bookMarkState: true,
    possibleAnswers: [
      { possibleAnswer: 'AC Mailand' },
      { possibleAnswer: 'Real Madrid' },
      { possibleAnswer: 'FC Bayern München' },
    ],
  },
  {
    question: 'Welches Land hat die Fußball-Weltmeisterschaft 2022 gewonnen?',
    answer: 'Argentinien',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1280px-Flag_of_Argentina.svg.png',
    imgAlt: 'Argentinien World Cup 2022',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Frankreich' },
      { possibleAnswer: 'Kroatien' },
      { possibleAnswer: 'Argentinien' },
    ],
  },
  {
    question:
      "Welche dieser Spieler haben noch nie einen Ballon d'Or gewonnen?",
    answer: 'Neymar und Kylian Mbappé',
    imgUrl:
      'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2020/02/01/2767548-57172970-2560-1440.jpg',
    imgAlt: 'Neymar, Mbappé, Ronaldo',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Cristiano Ronaldo und Neymar' },
      { possibleAnswer: 'Neymar und Kylian Mbappé' },
      { possibleAnswer: 'Cristiano Ronaldo und Kylian Mbappé' },
    ],
  },
  {
    question:
      'Mit welchem Verein hat Kylian Mbappé im Alter von 18 Jahren die französische Ligue 1 gewonnen?',
    answer: 'AS Monaco',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/800px-LogoASMonacoFC2021.svg.png',
    imgAlt: 'Kylian Mbappé AS Monaco',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Paris Saint-Germain' },
      { possibleAnswer: 'AS Monaco' },
      { possibleAnswer: 'Olympique Lyon' },
    ],
  },
  {
    question:
      'Für welche Nationalmannschaft hat Cristiano Ronaldo die meisten Länderspiele bestritten?',
    answer: 'Portugal',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png',
    imgAlt: 'Cristiano Ronaldo Portugal',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Portugal' },
      { possibleAnswer: 'Brasilien' },
      { possibleAnswer: 'Spanien' },
    ],
  },
  {
    question:
      'Für welche Nationalmannschaft hat Cristiano Ronaldo die meisten Länderspiele bestritten?',
    answer: 'Portugal',
    imgUrl:
      'https://www.rnd.de/resizer/v2/LTLTV7LOH5GZXDR7DDFGTWLBKU.jpg?auth=f27b0ed546e24e4c8bb04e3d58128f2b44de8001e4d6d53dc0213052d5875c86&quality=70&width=596&height=335&smart=true',
    imgAlt: 'Cristiano Ronaldo Portugal',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Portugal' },
      { possibleAnswer: 'Brasilien' },
      { possibleAnswer: 'Spanien' },
    ],
  },
];

export const colorPaletteFifa = [
  '#a611ed',
  '#dca1f8',
  '#56097b',
  '#9c6c94',
  '#b0a0a4',
  '#34243c',
];
export const colorPalette = ['#1077c3', '#49bce3', '#fec310', '#56042c'];

let lsObjectName = 'quizdataProfessionalSoccer';
export const quizStateProfessionalSoccer = {
  quizName: 'Soccer',
  allQuestionsAnswered: false,
  lsObjectName: lsObjectName,
  currentStateData: manageLSData(data, lsObjectName),
  bookmarked: [],
  currentQuestionIndex: 0,
  countCorrectAnswers: 0,
  progressPercent: 0,
  correctAnswersText: '',
  colorPalette: colorPaletteFifa,
};
