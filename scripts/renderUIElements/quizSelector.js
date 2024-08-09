import { availableQuizzies } from '../../data/availableQuizzies.js';
import { toggleDarkMode } from '../states/darkModeToggle.js';
import { getBookMarkedItems } from '../views/renderBookMarkedItems.js';
import {
  renderQuiz,
  setCurrentQuiz,
  setCurrentQuizState,
} from '../views/renderQuiz.js';
const footer = document.getElementById('footer');

export function createQuizSelect() {
  const selectElement = document.createElement('select');
  selectElement.name = 'quizzies';
  selectElement.id = 'quizzies';

  for (const quiz of availableQuizzies) {
    const quizName = quiz.quizName;
    const optionElement = document.createElement('option');
    optionElement.value = quizName.toLowerCase(); // Use lowercase for consistency
    optionElement.text = quizName;
    selectElement.add(optionElement);
    selectElement.addEventListener('change', (event) => {
      const selectedQuiz = event.target.value;

      setCurrentQuiz(selectedQuiz);
      renderQuiz();
      getBookMarkedItems();
      toggleDarkMode();
    });
  }

  footer.appendChild(selectElement);
}
