import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { HealthEntry } from "./interfaces/healthEntry.interface";

@Injectable()
export class HealthEntriesService {
    
    constructor(@InjectModel('HealthEntry') private catModel: Model<HealthEntry>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
}