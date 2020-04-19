
import * as mongoose from 'mongoose';

export const HealthEntrySchema = new mongoose.Schema({
  id: Number,
  date: Date,
  location: String,
  temparture: Number
});