let currentStateData = [];

export function manageLSData(quizDataItem, quizDataName) {
  if (!localStorage.getItem(quizDataName)) {
    localStorage.setItem(quizDataName, JSON.stringify(quizDataItem));
    currentStateData = quizDataItem;
  } else {
    currentStateData = JSON.parse(localStorage.getItem(quizDataName));
  }
  return currentStateData;
}
export function storeNewDataToLS(quizDataItem, quizDataName) {
  const currentQuizData = JSON.parse(localStorage.getItem(quizDataName));
  console.log('clicked');

  return 'successfully stored';
}
