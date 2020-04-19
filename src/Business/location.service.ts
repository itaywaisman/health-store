import { Injectable, NotFoundException } from '@nestjs/common';
import { Location } from './location.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LocationDto } from './dto/location.dto';

@Injectable()
export class LocationService {

  constructor(@InjectModel('Location') private readonly LocationModel: Model<Location>) {
  }

  async insertLocation(locationDto: LocationDto) {
    const newLocation = new this.LocationModel(locationDto);
    const result = await newLocation.save();
    return result._id;

  }

  async getLocation() {
    const location = await this.LocationModel.find().exec();
    return location

  }

  async getLocationById(locationId: string): Promise<Location> {
    let location;
    try {
      location = await this.LocationModel.findById(locationId).exec();
    } catch (e) {
      throw new NotFoundException('could not find location');
    }
    if (!location) {
      throw new NotFoundException('could not find location');
    }
    return location;
  }

  async updateLocation(locationDto:LocationDto) {
    const updateLocation = await this.LocationModel.findById(locationDto.id).exec();

    if (locationDto.name) {
      updateLocation.name = locationDto.name;
    }
    if (locationDto.city) {
      updateLocation.city = locationDto.city;
    }
    if (locationDto.address) {
      updateLocation.address = locationDto.address;
    }
    if (locationDto.locationLicense) {
      updateLocation.locationLicense = locationDto.locationLicense;
    }


    const result = await updateLocation.save();
    return null;
  }

  async deleteLocationById(locationId: any) {
    await this.LocationModel.deleteOne(locationId);
    return null;
  }
}
