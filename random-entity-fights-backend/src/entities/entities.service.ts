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

  async findPeople(): Promise<Entity[]> {
    const foundEntities = await this.entityModel.find().exec();

    const randomPeople = foundEntities
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    return randomPeople;
  }

  async findStarships(): Promise<Entity[]> {
    const foundEntities = await this.entityModel.find().exec();

    const randomStarships = [
      ...new Set(foundEntities.map((x) => x.starship.name)),
    ]
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    return foundEntities.filter(
      (x) =>
        x.starship.name === randomStarships[0] ||
        x.starship.name === randomStarships[1],
    );
  }
}
