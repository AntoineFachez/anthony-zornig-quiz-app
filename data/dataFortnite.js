import { manageLSData } from '../scripts/states/manageLSData.js';

export const data = [
  {
    question:
      'Welche Waffe wurde in Fortnite am häufigsten durch den Tresor rotiert?',
    answer: 'Trommelgewehr',
    imgUrl:
      'https://images.mein-mmo.de/magazin/medien/2018/07/Fortnite-Tommy-Gun-01.jpg',
    imgAlt: 'Drum Gun Fortnite',
    bookMarkState: true,
    possibleAnswers: [
      { possibleAnswer: 'Pumpgun' },
      { possibleAnswer: 'Trommelgewehr' },
      { possibleAnswer: 'Minigun' },
    ],
  },
  {
    question:
      'Welcher berühmte Streamer hält den Rekord für die meisten Solo-Siege in Fortnite?',
    answer: 'Ninja',
    imgUrl:
      'https://yt3.googleusercontent.com/5oI9heBQT621qOEhp8xi3RMwNpV-B50Qkvrztu8joCzPo69FC3lQzorHGP0ZpJ8eDdNTMqsc7nc=s160-c-k-c0x00ffffff-no-rj',
    imgAlt: 'Ninja Fortnite',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Tfue' },
      { possibleAnswer: 'Ninja' },
      { possibleAnswer: 'Myth' },
    ],
  },

  {
    question:
      'In welcher Saison wurde die Karte von Fortnite komplett überflutet?',
    answer: 'Kapitel 2, Staffel 3',
    imgUrl:
      'https://imageio.forbes.com/specials-images/imageserve/5ee9e343a2b06400077bc01e/Fortnite/960x0.jpg?format=jpg&width=1440',
    imgAlt: 'Fortnite Season 3 Chapter 2',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Kapitel 1, Staffel 9' },
      { possibleAnswer: 'Kapitel 2, Staffel 2' },
      { possibleAnswer: 'Kapitel 2, Staffel 3' },
    ],
  },
  {
    question:
      'Welcher Skin war der erste, der in Fortnite einen reaktiven Stil hatte?',
    answer: 'Drift',
    imgUrl:
      'https://progameguides.com/wp-content/uploads/2017/12/fortnite-outfit-drift-full.jpg',
    imgAlt: 'Drift Fortnite Skin',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Ragnarök' },
      { possibleAnswer: 'Drift' },
      { possibleAnswer: 'Omega' },
    ],
  },
  {
    question: 'Wie heißt der erste Boss, der in Fortnite eingeführt wurde?',
    answer: 'Sturmkönig',
    imgUrl:
      'https://cdn.vox-cdn.com/thumbor/jodZkFvXESnUjygleVbvnud6B1I=/0x0:1648x1080/920x613/filters:focal(558x355:820x617):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65578383/storm_king.0.jpg',
    imgAlt: 'Storm King Fortnite',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Thanos' },
      { possibleAnswer: 'Sturmkönig' },
      { possibleAnswer: 'Galactus' },
    ],
  },

  {
    question:
      'Welche Heavy-Metal-Band kooperierte mit Fortnite für ein In-Game-Konzert?',
    answer: 'Metallica',
    imgUrl:
      'https://www.pcgames.de/screenshots/1000x562/2024/06/Fortnite-Festival-Season-4-Metallica-4-pc-games_artwork.jpg',
    imgAlt: 'Metallica Fortnite',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Slipknot' },
      { possibleAnswer: 'Metallica' },
      { possibleAnswer: 'Iron Maiden' },
    ],
  },
  {
    question:
      'Welcher YouTuber veranstaltete das "Extreme Survival Challenge"-Event in Fortnite?',
    answer: 'MrBeast',
    imgUrl:
      'https://cdn2.unrealengine.com/fortnite-mrbeast-1920x1080-a89cbc5bdf9c.jpg',
    imgAlt: 'MrBeast Fortnite',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Ninja' },
      { possibleAnswer: 'MrBeast' },
      { possibleAnswer: 'LazarBeam' },
    ],
  },
  {
    question:
      'In welcher Saison wurde der "Nullpunkt" erstmals in Fortnite enthüllt?',
    answer: 'Kapitel 2, Staffel 5',
    imgUrl:
      'https://cdn2.unrealengine.com/16br-placeholderv2-blog-newsheader-1920x600-1920x600-504cbd3b3c87.jpg',
    imgAlt: 'Fortnite Zero Point',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Kapitel 1, Staffel X' },
      { possibleAnswer: 'Kapitel 2, Staffel 4' },
      { possibleAnswer: 'Kapitel 2, Staffel 5' },
    ],
  },
  {
    question: 'Welches Unternehmen entwickelt Fortnite?',
    answer: 'Epic Games',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1024px-Epic_Games_logo.svg.png',
    imgAlt: 'Epic Games',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'EA Games' },
      { possibleAnswer: 'Ubisoft' },
      { possibleAnswer: 'Epic Games' },
    ],
  },
  {
    question:
      'Mit welchem berühmten Film-Franchise kooperierte Fortnite für das "Endgame"-Event?',
    answer: 'Avengers',
    imgUrl:
      'https://www.ingame.de/assets/images/2/725/2725097-52603882-fortnite-avengers-11-1S70.jpg',
    imgAlt: 'Fortnite Avengers Endgame',
    bookMarkState: false,
    possibleAnswers: [
      { possibleAnswer: 'Star Wars' },
      { possibleAnswer: 'Jurassic Park' },
      { possibleAnswer: 'Avengers' },
    ],
  },
];

export const colorPaletteSeason6 = [
  '#2a095f',
  '#3d02bd',
  '#e25bff',
  '#ddb1ff',
  '#fbeff',
];
export const colorPalette = [
  '#ffffff',
  '#319236',
  '#4c51f7',
  '#9d4dbb',
  '#f3af1',
];

let lsObjectName = 'quizDataFortnite';
export const quizStateFortnite = {
  quizName: 'Fortnite',
  allQuestionsAnswered: false,
  lsObjectName: lsObjectName,
  currentStateData: manageLSData(data, lsObjectName),
  bookmarked: [],
  currentQuestionIndex: 0,
  countCorrectAnswers: 0,
  progressPercent: 0,
  correctAnswersText: '',
  colorPalette: colorPaletteSeason6,
};
