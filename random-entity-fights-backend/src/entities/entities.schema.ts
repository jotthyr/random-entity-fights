import * as mongoose from 'mongoose';

export const EntitySchema = new mongoose.Schema({
  name: String,
  img: String,
  mass: Number,
  starship: {
    name: String,
    starshipImg: String,
  },
});
