import {Module} from "@nestjs/common";
import {LocationController} from "./location.controller";
import {LocationService} from "./location.service";
import { MongooseModule } from '@nestjs/mongoose';
import { LocationSchema } from './location.model';

@Module({
    imports: [MongooseModule.forFeature([{name:'Location',schema: LocationSchema}])],
    controllers:[LocationController],
    providers: [LocationService]
})
export class LocationModule {

}
