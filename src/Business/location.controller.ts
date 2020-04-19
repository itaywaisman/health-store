import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationDto } from './dto/location.dto';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {
  }

  @Post()
  addLocation(@Body() locationDto: LocationDto) {
    this.locationService.insertLocation(locationDto).then();
  }

  @Get()
  getAllLocation() {
    return this.locationService.getLocation();
  }

  @Get(':id')
  getLocation(@Param('id')locationId: string) {
    return this.locationService.getLocationById(locationId);
  }

  @Patch(':id')
  updateLocation(@Body('name') locationDto: LocationDto): any {
    this.locationService.updateLocation(locationDto).then();
    return null;
  }

  @Delete(':id')
  deleteLocation(@Param('id')locationId: string) {
    this.locationService.deleteLocationById(locationId).then();
    return null;
  }
}
