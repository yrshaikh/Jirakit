import ContentApp from './ContentApp';

// eslint-disable-next-line no-undef
const currentUrl = location.href;

async function init() {
  const contentApp = new ContentApp(currentUrl);
  await contentApp.run();
}

init().then(function () {
  // eslint-disable-next-line no-undef
  console.log('jirakit executed content script');
});
