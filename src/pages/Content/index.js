import JiraService from '../common/jiraService';
import Test from './modules/Test';

// eslint-disable-next-line no-undef
const url = location.href;
const jiraService = new JiraService();
const a = jiraService.getJiraUrl();
console.log('yolo content script', a);
console.log('current href', new Test().doSomething(url));
