import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { BusinessService } from './business.service';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {
  }

  @Post()
  addBusiness(@Body('name') businessName: string,
              @Body('city') city: string,
              @Body('address') address: string,
              @Body('businessLicense') businessLicense: number) {
    this.businessService.insertBusiness(businessName, city, address,businessLicense).then();
  }

  @Get()
  getAllBusiness() {
    return this.businessService.getBusiness();
  }

  @Get(':id')
  getBusiness(@Param('id')businessId: string) {
    return this.businessService.getBusinessById(businessId);
  }

  @Patch(':id')
  updateBusiness(
    @Param('id') businessId: string,
    @Body('name') businessName: string,
    @Body('city') city: string,
    @Body('address') address: string,
    @Body('businessLicense') businessLicense: number): any {
    this.businessService.updateBusiness(businessId, businessName, city, address,businessLicense).then();
    return null;
  }

  @Delete(':id')
  deleteBusiness(@Param('id')businessId: string) {
    this.businessService.deleteBusinessById(businessId).then();
    return null;
  }
}
