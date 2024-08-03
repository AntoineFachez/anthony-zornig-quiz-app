let currentStateData = [];
const lineBreaker = '<br/>';

export const data = [
  {
    question:
      'Welche Waffe wurde in Fortnite am häufigsten durch den Tresor rotiert?',
    answer: 'Trommelgewehr',
    imgUrl:
      'https://images.mein-mmo.de/magazin/medien/2018/07/Fortnite-Tommy-Gun-01.jpg',
    imgAlt: 'Drum Gun Fortnite',
    bookMarkState: false,
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
];
export const profileData = {
  name: 'Anthony Zornig',
  about: `Hi there! ${lineBreaker}I am a FischKopp.${lineBreaker} ${lineBreaker} I ❤️ `,
  links: [
    {
      href: 'https://github.com/AntoineFachez',
      textContent: 'Visit my GitHub',
      styleClass: 'link-github',
    },
    {
      href: 'https://www.linkedin.com/in/anthony-zornig-02b784239/',
      textContent: 'Visit my Linkedin',
      styleClass: 'link-linked',
    },
  ],
  profileImage: {
    url: 'https://avatars.githubusercontent.com/u/85788734?s=400&u=aa83a216d2888dcf99a7a7c9704d6621cfb4a900&v=4',
    alt: 'antoine fachez',
  },
  misc: {
    images: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
        alt: 'JavaScript Logo',
      },
    ],
  },
};
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

export function manageDataLS() {
  if (!localStorage.getItem('quizData')) {
    localStorage.setItem('quizData', JSON.stringify(data));
    currentStateData = data;
  } else {
    currentStateData = JSON.parse(localStorage.getItem('quizData'));
  }
  return currentStateData;
}
export const quizState = {
  allQuestionsAnswered: false,
  currentStateData: manageDataLS(),
  bookmarked: [],
  currentQuestionIndex: 0,
  countCorrectAnswers: 0,
  progressPercent: 0,
  correctAnswersText: '',
};
