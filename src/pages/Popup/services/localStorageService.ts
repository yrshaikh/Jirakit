import * as store from 'store';

class LocalStorageService {
  public get(key: string): string {
    return store.get('JIRAKIT:URL');
  }
}

// const get = (): string => {
//   return store.get("JIRAKIT:URL");
// };
//
// const set = (key, object) => {
//   return store.set(key, object);
// };
// const clear = (key) => {
//   return store.remove(key);
// };
// const clearAll = (key) => {
//   return store.clearAll(key);
// };

export default LocalStorageService;
