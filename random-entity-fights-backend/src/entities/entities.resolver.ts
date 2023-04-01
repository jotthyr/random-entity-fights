import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EntitiesService } from './entities.service';
import { EntityType } from './dto/create-entity.dto';
import { EntityInput } from './inputs/entity.input';
import { shuffle } from 'lodash';

@Resolver()
export class EntitiesResolver {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  async readDataFromDatabase() {
    const foundEntities = await this.entitiesService.entityModel.find().exec();

    const randomFoundEnitities = shuffle(foundEntities);

    return randomFoundEnitities;
  }

  @Query(() => [EntityType])
  async entities() {
    const randomFoundEnitities = await this.readDataFromDatabase();

    return this.entitiesService.findPeople(randomFoundEnitities);
  }

  @Query(() => [EntityType])
  async entitiesStarship() {
    const randomFoundEnitities = await this.readDataFromDatabase();

    return this.entitiesService.findStarships(randomFoundEnitities);
  }

  @Mutation(() => EntityType)
  async createEntity(@Args('input') input: EntityInput) {
    return this.entitiesService.create(input);
  }
}
