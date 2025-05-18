import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal } from './schemas/animal.schema';

@Injectable()
export class AnimalsService {
  constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) {}

  async create(data: Partial<Animal>): Promise<Animal> {
    return this.animalModel.create(data);
  }

  async findAll(): Promise<Animal[]> {
    return this.animalModel.find().exec();
  }

  async findByUserId(userId: string): Promise<Animal | null> {
    return this.animalModel.findOne({ user_id: userId }).exec();
  }
    
  async update(id: string, data: Partial<Animal>): Promise<Animal | null> {
    return this.animalModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }
  
  async delete(id: string): Promise<Animal | null> {
    return this.animalModel.findByIdAndDelete(id).exec();
  }  
}
