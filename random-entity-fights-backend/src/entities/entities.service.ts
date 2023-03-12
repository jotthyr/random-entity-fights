import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Entity } from './interfaces/entity.interface';
import { EntityInput } from './inputs/entity.input';

@Injectable()
export class EntitiesService {
  constructor(
    @InjectModel('Entity') private readonly entityModel: Model<Entity>,
  ) {}

  async create(createEntityDto: EntityInput): Promise<Entity> {
    const createdEntity = new this.entityModel(createEntityDto);
    return await createdEntity.save();
  }

  async findAll(): Promise<Entity[]> {
    return await this.entityModel.find().exec();
  }
}
