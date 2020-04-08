import ContentApp from './ContentApp';

// eslint-disable-next-line no-undef
const currentUrl = location.href;
// eslint-disable-next-line no-undef
const currentTitle = document.title;

async function init() {
  const contentApp = new ContentApp(currentUrl, currentTitle);
  await contentApp.run();
}

init().then(function () {
  // eslint-disable-next-line no-undef
  console.log('jirakit executed content script');
});
