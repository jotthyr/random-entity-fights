import { Document } from 'mongoose';

export interface Entity extends Document {
  readonly name: string;
  readonly img: string;
  readonly mass: number;
  readonly starship: {
    readonly name: string;
    readonly starshipImg: string;
  };
}
