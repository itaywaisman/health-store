import { Controller, Get } from '@nestjs/common';
import { HealthEntriesService } from './healthEntries.service';

@Controller('healthEntriesController')
export class HealthEntriesController {

    constructor(private _healthEntriesService: HealthEntriesService) {

    }

    @Get()
    public findAll(): void {
        this._healthEntriesService.addEntry();
    }

}