import { Injectable, NotFoundException } from '@nestjs/common';
import { Location } from './location.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LocationDto } from './dto/location.dto';

@Injectable()
export class LocationService {

  constructor(@InjectModel('Location') private readonly _locationModel: Model<Location>) {
  }

  async insertLocation(locationDto: LocationDto): Promise<string> {
    const newLocation = new this._locationModel(locationDto);
    const result = await newLocation.save();
    return result._id;
  }

  async getLocation() :Promise<Location[]> {
    return await this._locationModel.find().exec()

  }

  async getLocationById(locationId: string): Promise<Location> {
    let location;
    try {
      location = await this._locationModel.findById(locationId).exec();
    } catch (e) {
      throw new NotFoundException('could not find location');
    }
    if (!location) {
      throw new NotFoundException('could not find location');
    }
    return location;
  }

  async updateLocation(locationDto:LocationDto) {
    const updateLocation = await this._locationModel.findById(locationDto.id).exec();

    if (locationDto.name) {
      updateLocation.name = locationDto.name;
    }
    if (locationDto.streetName) {
      updateLocation.streetName = locationDto.streetName;
    }
    if (locationDto.streetNumber) {
      updateLocation.streetNumber = locationDto.streetNumber;
    }
    if (locationDto.address) {
      updateLocation.address = locationDto.address;
    }
    if (locationDto.locationLicense) {
      updateLocation.locationLicense = locationDto.locationLicense;
    }


    const result = await updateLocation.save();
    return result.id;
  }

  async deleteLocationById(locationId: any) {
    await this._locationModel.deleteOne(locationId);

  }
}
