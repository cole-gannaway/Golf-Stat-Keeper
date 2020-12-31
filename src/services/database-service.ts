import IHoleStats from '../interfaces/IHoleStats';
import IRoundStats from '../interfaces/IRoundStats';
import DatabaseDAO from './database-dao';
import FirebasePathBuilder from './firebase-path-builder';

export default class DatabaseService {
  private dbDao: DatabaseDAO;
  constructor(database: firebase.default.database.Database) {
    this.dbDao = new DatabaseDAO(database);
  }

  public async createNewRoundStats() {
    const emptyRoundHoleStats = [];
    for (let i = 0; i < 18; i++) {
      const emptyHoleStats: IHoleStats = {
        key: '',
        holeId: i + 1,
        strokes: 4,
        fairway: 'CENTER',
        gir: false,
        putts: 2,
        penaltyStrokes: 0,
        chips: 0,
        sandStrokes: 0,
      };
      emptyRoundHoleStats.push(emptyHoleStats);
    }
    const emptyRoundStats: IRoundStats = {
      key: '',
      roundId: 'Untitled',
      courseName: '',
      playerName: '',
      date: Date.now(),
      stats: emptyRoundHoleStats,
    };

    let retVal = null;
    const rootPath = new FirebasePathBuilder().rootPath().createPath();
    const roundKey = await this.dbDao.pushNewObject(rootPath);
    if (roundKey) {
      retVal = roundKey;
      const roundPath = new FirebasePathBuilder()
        .rootPath()
        .appendPath(roundKey)
        .createPath();
      emptyRoundStats.key = roundKey;
      this.dbDao.setObjectData(roundPath, emptyRoundStats);
    }
    return retVal;
  }
  public async updateRoundMetadata(
    roundKey: string,
    data: { courseName: string; roundId: string; playerName: string }
  ) {
    const roundPath = new FirebasePathBuilder()
      .rootPath()
      .appendPath(roundKey)
      .createPath();
    await this.dbDao.updateObjectData(roundPath, data);
  }

  public async updateHoleStatsReal(
    roundKey: string,
    holeKey: string,
    data: {
      strokes: number;
      fairway: string;
      gir: boolean;
      putts: number;
      penaltyStrokes: number;
      chips: number;
      sandStrokes: number;
    }
  ) {
    const roundPath = new FirebasePathBuilder()
      .rootPath()
      .appendPath(roundKey)
      .appendPath('stats')
      .appendPath(holeKey)
      .createPath();
    await this.dbDao.updateObjectData(roundPath, data);
  }
}
