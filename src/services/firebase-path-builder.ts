export default class FirebasePathBuilder {
  private path: string = '';

  public rootPath() {
    this.path = 'rounds';
    return this;
  }
  public setPath(path: string) {
    this.path = path;
    return this;
  }
  public appendPath(path: string) {
    this.path = this.path + '/' + path;
    return this;
  }
  public createPath() {
    return this.path;
  }
}
