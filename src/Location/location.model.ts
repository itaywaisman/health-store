import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address:{type:String,required:true},
  locationLicense:{type: Number,required:false}
});

export interface Location extends mongoose.Document {
  id:string;
  name: string;
  city: string;
  address:string;
  locationLicense?: number;
}
