/**
 * Key of AsyncStorage
 */
export enum SessionStorageKey {
  TOKEN = 'TOKEN_CMS_TK',
}

export class AsyncSessionStorage {
  /**
   * Save AsyncStorage
   * @param key
   * @param value
   */
  static save(key: SessionStorageKey, value: string): void {
    window.localStorage.setItem(key, value);
  }

  /**
   * Get AsyncStorage
   * @param key
   */
  static get(key: SessionStorageKey): string | null {
    return window.localStorage.getItem(key);
  }

  /**
   * Delete AsyncStorage
   * @param key
   */
  static remove(key: SessionStorageKey): void {
    return window.localStorage.removeItem(key);
  }

  /**
   * Get Object AsyncStorage
   * @param key
   */
  static getObject<T>(key: SessionStorageKey): T | null {
    const value = window.localStorage.getItem(key);
    if (!value || value === 'undefined' || value === 'null') return null;

    return JSON.parse(value);
  }

  /**
   * Save Object AsyncStorage
   * @param key
   * @param value
   */
  static saveObject<T>(key: SessionStorageKey, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static clear(): void {
    window.localStorage.clear();
  }
}
