class StorageService {
  public async get() {
    return new Promise((resolve, reject) => {
      try {
        // @ts-ignore
        chrome.storage.local.get('JIRA', function (value) {
          resolve(value['JIRA']);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  }

  public async set(value: any) {
    return new Promise((resolve, reject) => {
      try {
        // HAZARD!
        // The set method cannot accept variable, do not change.
        // @ts-ignore
        chrome.storage.local.set({ 'JIRA': value }, function (value) {
          resolve(value);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  }

  public async clear() {
    return new Promise((resolve, reject) => {
      try {
        // @ts-ignore
        chrome.storage.local.remove(['JIRA'], function (value) {
          resolve(value);
        });
      } catch (ex) {
        reject(ex);
      }
    });
  }
}

export default StorageService;
