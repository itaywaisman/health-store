import { Injectable, NotFoundException } from '@nestjs/common';
import { Business } from './business.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BusinessService {

  constructor(@InjectModel('Business') private readonly BusinessModel: Model<Business>) {
  }


  async insertBusiness(name: string, city: string, address: string, businessLicense:number) {
    const newBusiness = new this.BusinessModel({
      name,
      city,
      address,
      businessLicense
    });
    const result = await newBusiness.save();
    return result._id;

  }

  async getBusiness() {
    const business = await this.BusinessModel.find().exec();
    return business

  }

  async getBusinessById(businessId: string): Promise<Business> {
    let business;
    try {
      business = await this.BusinessModel.findById(businessId).exec();
    } catch (e) {
      throw new NotFoundException('could not find user');
    }
    if (!business) {
      throw new NotFoundException('could not find user');
    }
    return business;
  }

  async updateBusiness(businessId: string,name: string, city: string, address: string, businessLicense:number) {
    const updateBusiness = await this.BusinessModel.findById(businessId).exec();

    if (name) {
      updateBusiness.name = name;
    }
    if (city) {
      updateBusiness.city = city;
    }
    if (address) {
      updateBusiness.address = address;
    }
    if (businessLicense) {
      updateBusiness.businessLicense = businessLicense;
    }


    const result = await updateBusiness.save();
    return null;
  }

  async deleteBusinessById(businessId: any) {
    await this.BusinessModel.deleteOne(businessId);
    return null;
  }
}
