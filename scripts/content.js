chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let output;

  output = handleConversions(message.message.id, message.message.parent, Number(message.message.value));

  console.log(output)
})