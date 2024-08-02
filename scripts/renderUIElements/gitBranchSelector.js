// import { deployBranch } from '../github/branchPicker.js';

// const footer = document.querySelector('footer');
// export function createBranchSelector(branchNames) {
//   const selectElement = document.createElement('select');
//   selectElement.id = 'cars'; // Set the ID
//   selectElement.name = 'cars'; // Set the name

//   // 2. Populate the options
//   for (const branchName of branchNames) {
//     const optionElement = document.createElement('option');
//     optionElement.value = branchName;
//     optionElement.text = branchName;
//     selectElement.appendChild(optionElement);
//   }

//   // 3. Add event listener to trigger deployment
//   selectElement.addEventListener('change', () => {
//     const selectedBranch = selectElement.value;
//     deployBranch(selectedBranch); // Call your deployBranch function
//   });
//   footer.appendChild(selectElement);
// }
