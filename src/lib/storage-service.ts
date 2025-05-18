type TKey = "access_token";
const STORAGE_KEY: TKey = "access_token";
const isSsr = typeof window === "undefined";
export default class StorageService {
  private static instance: StorageService;

  static getInstance(): StorageService {
    if (!StorageService.instance) this.instance = new StorageService();
    return this.instance;
  }

  static getLocalAccessToken = (): string => {
    if (isSsr) return "";
    return window.localStorage.getItem(STORAGE_KEY) || "";
  };

  static setLocalAccessToken = (token: string): void => {
    if (isSsr) return;
    window.localStorage.setItem(STORAGE_KEY, token);
  };

  static removeLocalAccessToken = (): void => {
    if (isSsr) return;
    window.localStorage.removeItem(STORAGE_KEY);
  };
}
