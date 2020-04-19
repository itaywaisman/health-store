import { Controller, Get, Post, Body } from '@nestjs/common';
import { HealthEntriesService } from './healthEntries.service';
import { HealthEntry } from './interfaces/healthEntry.interface';
import { CreateHealthEntryDto } from './dto/createHealthEntry.dto';

@Controller('healthEntriesController')
export class HealthEntriesController {

    constructor(private _healthEntriesService: HealthEntriesService) {

    }

    @Post()
    public async create(@Body() createHealthEntryDto: CreateHealthEntryDto) {
        await this._healthEntriesService.create(createHealthEntryDto);
    }


    @Get()
    public async findAll(): Promise<HealthEntry[]> {
        return await this._healthEntriesService.findAll();
    }

}