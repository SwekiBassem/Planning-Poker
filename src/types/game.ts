import { Status } from './status';

export interface Game {
  id: string;
  name: string;
  average: number;
  gameStatus: Status;
  gameType?: GameType | GameType.Fibonacci;
  createdBy: string;
  createdById: string;
  createdAt: Date;
  updatedAt?: Date;
  userStory : any;

}

export interface NewGame {
  name: string;
  gameType: string;
  createdBy: string;
  createdAt: Date;
  userStory : any;
}

export enum GameType {
  Fibonacci = 'Fibonacci',
  ShortFibonacci = 'ShortFibonacci',
  TShirt = 'TShirt',
}
