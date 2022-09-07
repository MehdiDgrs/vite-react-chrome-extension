function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  for (const tab of tabs) {
   chrome.tabs
      .sendMessage(tab.id, { clicked: true }).then(value => console.log(value),err=> console.error(err))
   
  }
}

chrome.action.onClicked.addListener(() => {
  chrome.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(sendMessageToTabs)
    .catch(onError);
});