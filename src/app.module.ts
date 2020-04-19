import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthEntriesModule } from './healthEntries/healthEntries.module';
import { BusinessModule } from './business/business.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
    BusinessModule,
    HealthEntriesModule],
})
export class AppModule {}
