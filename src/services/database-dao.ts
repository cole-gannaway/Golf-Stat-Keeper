export default class DatabaseDAO {
  private db: firebase.default.database.Database;

  constructor(database: firebase.default.database.Database) {
    this.db = database;
  }
  public async pushNewObject(refPath: string) {
    const key = this.db.ref(refPath).push().key;
    return key;
  }

  public async getObjectAsJson(refPath: string) {
    const ref = this.db.ref(refPath);
    const foundSnapshot = await ref.once('value', (snapshot) => {
      return snapshot;
    });
    if (foundSnapshot) {
      return foundSnapshot.toJSON();
    } else {
      return null;
    }
  }

  public async doesObjectExist(refPath: string) {
    const ref = this.db.ref(refPath);
    const retVal = await ref.once('value', (snapshot) => {
      return snapshot.val();
    });
    if (retVal) {
      return true;
    } else {
      return false;
    }
  }

  public async setObjectData(refPath: string, data: any) {
    await this.db.ref(refPath).set(data);
  }

  public async updateObjectData(refPath: string, data: any) {
    await this.db.ref(refPath).update(data);
  }
  public async deleteObject(refPath: string) {
    await this.db.ref(refPath).remove();
  }
}
