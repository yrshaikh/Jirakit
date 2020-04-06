import * as store from 'store';

class LocalStorageService {
  public get(key: string): string {
    return store.get(key);
  }

  public set(key: string, value: string): void {
    store.set(key, value);
  }

  public clearAll(): void {
    return store.clearAll();
  }
}

export default LocalStorageService;
