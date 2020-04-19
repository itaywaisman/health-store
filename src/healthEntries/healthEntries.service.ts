import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { HealthEntry } from "./interfaces/healthEntry.interface";
import { CreateHealthEntryDto } from "./dto/createHealthEntry.dto";

@Injectable()
export class HealthEntriesService {
    
    constructor(@InjectModel('HealthEntry') private healthEntryModel: Model<HealthEntry>) {}

    async create(createHealthEntryDto: CreateHealthEntryDto): Promise<HealthEntry> {
        const createdHealthEntry = new this.healthEntryModel(createHealthEntryDto);
        return createdHealthEntry.save();
    }

    async findAll(): Promise<HealthEntry[]> {
        return this.healthEntryModel.find().exec();
    }
}