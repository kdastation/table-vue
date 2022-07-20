export class Utils {
  static setItemsInLocalStorage(key: string, items: any) {
    const itemsJSON = JSON.stringify(items);
    localStorage.setItem(key, itemsJSON);
  }
  static getItemsForLocalStorage(key: string) {
    const items = localStorage.getItem(key);
    if (items) {
      return JSON.parse(items);
    }
  }
}
