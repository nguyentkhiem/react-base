/**
 * Key of AsyncStorage
 */
export enum StorageKey {
  TOKEN = 'TOKEN_CMS_TK',
  REFRESH_TOKEN = 'REFRESH_TOKEN_CMS_TK',
  USER = 'USER_CMS_TK',
  LOCACLE = 'LOCACLE_CMS_TK',
}

export class AsyncStorageUtils {
  /**
   * Save AsyncStorage
   * @param key
   * @param value
   */
  static save(key: StorageKey, value: string): void {
    window.sessionStorage.setItem(key, value);
  }

  /**
   * Get AsyncStorage
   * @param key
   */
  static get(key: StorageKey): string | null {
    return window.sessionStorage.getItem(key);
  }

  /**
   * Delete AsyncStorage
   * @param key
   */
  static remove(key: StorageKey): void {
    return window.sessionStorage.removeItem(key);
  }

  /**
   * Get Object AsyncStorage
   * @param key
   */
  static getObject<T>(key: StorageKey): T | null {
    const value = window.sessionStorage.getItem(key);
    if (!value || value === 'undefined' || value === 'null') return null;

    return JSON.parse(value);
  }

  /**
   * Save Object AsyncStorage
   * @param key
   * @param value
   */
  static saveObject<T>(key: StorageKey, value: T): void {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  static clear(): void {
    window.sessionStorage.clear();
  }
}
