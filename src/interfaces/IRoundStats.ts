import IHoleStats from './IHoleStats';

export default interface IRoundStats {
  key: string;
  roundId: string;
  playerName: string;
  courseName: string;
  date: number;
  stats: IHoleStats[];
}
