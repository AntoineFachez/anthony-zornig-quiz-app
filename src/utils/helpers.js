export async function copyJSONToClipboard(jsonObject) {
  try {
    const jsonString = JSON.stringify(jsonObject);
    await navigator.clipboard.writeText(jsonString);
    console.log('JSON object copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy JSON object to clipboard: ', err);
  }
}
export function callSiteByURL(url) {
  // window.open(url, 'newWindow', 'width=500,height=800');
  const newWindow = window.open(url, 'newWindow');

  // newWindow.addEventListener('load', (e) => {
  //   newWindow.resizeTo(
  //     400, // Keep the same width
  //     window.screen.availHeight // Use the available screen height

  // });
}
