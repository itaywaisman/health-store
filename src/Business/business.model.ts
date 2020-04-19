import * as mongoose from 'mongoose';

export const BusinessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address:{type:String,required:true},
  businessLicense:{type: Number,required:true}
});

export interface Business extends mongoose.Document {
  id:string;
  name: string;
  city: string;
  address:string;
  businessLicense: number;
}
