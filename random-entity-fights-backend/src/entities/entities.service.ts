import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Entity } from './interfaces/entity.interface';
import { EntityInput } from './inputs/entity.input';

@Injectable()
export class EntitiesService {
  constructor(
    @InjectModel('Entity') public readonly entityModel: Model<Entity>,
  ) {}

  async create(createEntityDto: EntityInput): Promise<Entity> {
    const createdEntity = new this.entityModel(createEntityDto);
    return await createdEntity.save();
  }

  async findPeople(randomFoundEnitities): Promise<Entity[]> {
    const twoUniquePeopleNames = [
      ...new Set(randomFoundEnitities.map((x) => x.name)),
    ].slice(0, 2);

    const twoRandomPeopleObjects = randomFoundEnitities
      .filter(
        (x) =>
          x.name === twoUniquePeopleNames[0] ||
          x.name === twoUniquePeopleNames[1],
      )
      .filter(
        (value, index, self) =>
          index === self.findIndex((x) => x.name === value.name),
      );

    return twoRandomPeopleObjects;
  }

  async findStarships(randomFoundEnitities): Promise<Entity[]> {
    const twoRandomStarshipsNames = [
      ...new Set(randomFoundEnitities.map((x) => x.starship.name)),
    ].slice(0, 2);

    const twoRandomStarships = randomFoundEnitities.filter(
      (x) =>
        x.starship.name === twoRandomStarshipsNames[0] ||
        x.starship.name === twoRandomStarshipsNames[1],
    );

    return twoRandomStarships;
  }
}
