import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationDto } from './dto/location.dto';
import { Location } from './location.model';

@Controller('location')
export class LocationController {
  constructor(private _locationService: LocationService) {
  }

  @Post()
  addLocation(@Body() locationDto: LocationDto):Promise<string> {
  return this._locationService.insertLocation(locationDto).then();
  }

  @Get()
  getAllLocation():Promise<Location[]>  {
    return this._locationService.getLocation();
  }

  @Get(':id')
  getLocation(@Param('id')locationId: string): Promise<Location> {
    return this._locationService.getLocationById(locationId);
  }

  @Patch(':id')
  public async updateLocation(@Body('name') locationDto: LocationDto):Promise<string> {
  return await this._locationService.updateLocation(locationDto);
  }

  @Delete(':id')
  public async  deleteLocation(@Param('id')locationId: string) {
    await this._locationService.deleteLocationById(locationId);
  }
}
