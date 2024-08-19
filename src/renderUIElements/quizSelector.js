import { availableQuizzies } from '../data/availableQuizzies.js';
import { getCurrentAppState } from '../states/appState.js';
import { setDarkMode } from '../states/darkModeToggle.js';
import { getBookMarkedItems } from '../views/renderBookMarkedItems.js';
import {
  getCurrentQuizState,
  renderQuiz,
  setCurrentQuiz,
  setCurrentQuizState,
} from '../views/renderQuiz.js';
import { setCurrentViewIndicator } from './currentViewIndicator.js';

export function createQuizSelect(currentAppState) {
  const selectElement = document.createElement('select');
  selectElement.name = 'quizzies';
  selectElement.id = 'quizzies';

  for (const quiz of availableQuizzies) {
    const quizLSItemName = quiz.lsItemName;
    const quizName = quiz.quizName;
    const optionElement = document.createElement('option');
    optionElement.value = quizLSItemName.toLowerCase(); // Use lowercase for consistency
    optionElement.text = quizName;
    selectElement.add(optionElement);
    selectElement.addEventListener('change', (event) => {
      const selectedQuiz = event.target.value;

      setCurrentQuiz(selectedQuiz);
      setCurrentViewIndicator(currentAppState, getCurrentQuizState());
      getBookMarkedItems(currentAppState);

      // renderQuiz();
      // setDarkMode(getCurrentAppState());
    });
  }
  return selectElement;
}
