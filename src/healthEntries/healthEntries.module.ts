import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthEntriesController } from './healthEntries.controller';
import {  HealthEntriesService } from './healthEntries.service';
import {  HealthEntrySchema } from './schemas/healthEntry.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'HealthEntry', schema: HealthEntrySchema }])],
  controllers: [HealthEntriesController],
  providers: [HealthEntriesService],
})
export class HealthEntriesModule {}