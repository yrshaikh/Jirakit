const store = require('store');

const get = (key) => {
  return store.get(key);
};
const set = (key, object) => {
  return store.set(key, object);
};
const clear = (key) => {
  return store.remove(key);
};
const clearAll = (key) => {
  return store.clearAll(key);
};

export { get, set, clear, clearAll };
