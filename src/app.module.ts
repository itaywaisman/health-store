import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthEntriesModule } from './healthEntries/healthEntries.module';
import { LocationModule } from './Business/location.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
    LocationModule,
    HealthEntriesModule],
})
export class AppModule {}
