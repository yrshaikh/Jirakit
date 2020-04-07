import JiraService from '../common/jiraService';
import UrlService from '../common/urlService';

// eslint-disable-next-line no-undef
const currentUrl = location.href;

const jiraService = new JiraService();
const urlService = new UrlService(currentUrl);

async function init() {
  const jiraInfo = await jiraService.getJiraInfo();
  console.log('jiraInfo', jiraInfo);
  const isValid = urlService.isValid();
  console.log('isvalid', isValid);
}

const doNothing = init().then(function (response) {
  console.log('init executed');
});
