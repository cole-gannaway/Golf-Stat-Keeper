export default class FirebaseUtils {
  public static convertObjectToArray(obj: any): any[] {
    let retVal = [];
    if (obj) {
      const list: any[] = Object.values(obj);
      const keys = Object.keys(obj);
      list.forEach((item, i) => (item.key = keys[i]));
      retVal = list;
    }
    return retVal;
  }
}
