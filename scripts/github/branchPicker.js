export async function deployBranch(branchName) {
  const accessToken = await fetch('/env')
    .then((response) => response.text())
    .then((text) => {
      console.log(text);
      const env = text.split('\n').reduce((acc, line) => {
        const [key, value] = line.split('=');
        acc[key] = value;
        return acc;
      }, {});
      window.env = env;
    });
  console.log(accessToken);

  const response = await fetch(
    'https://api.github.com/repos/AntoineFachez/anthony-zornig-quiz-app/issues',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,

        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Deploy Branch Request',
        body: branchName,
      }),
    }
  )
    // ... (Handle response)
    .then((response) => {
      if (response.ok) {
        // Check if the request was successful (status code 200-299)
        // Success:
        return response.json(); // Parse the JSON response from GitHub
      } else {
        // Error:
        throw new Error(
          `Error creating issue: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((data) => {
      // Handle the successful response (data contains the issue details)
      console.log('Issue created:', data);
      // 1. Update UI to show a success message
      const successMessage = document.createElement('p');
      successMessage.textContent = `Deployment request for branch "${branchName}" submitted successfully.`;
      document.body.appendChild(successMessage);

      // 2. (Optional) Hide the branch selection dropdown or disable it temporarily
    })
    .catch((error) => {
      // Handle errors
      console.error('Error:', error);
      // 1. Show an error message in the UI
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Error submitting deployment request: ${error.message}`;
      document.body.appendChild(errorMessage);

      // 2. (Optional) Log the error to a service for further analysis
    });
}
