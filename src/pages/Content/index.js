import Test from './modules/Test';

// eslint-disable-next-line no-undef
const url = location.href;
console.log('yolo content script');
console.log('current href', new Test().doSomething(url));
