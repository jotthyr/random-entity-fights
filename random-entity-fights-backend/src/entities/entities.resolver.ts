import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EntitiesService } from './entities.service';
import { EntityType } from './dto/create-entity.dto';
import { EntityInput } from './inputs/entity.input';

@Resolver()
export class EntitiesResolver {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [EntityType])
  async entities() {
    return this.entitiesService.findPeople();
  }

  @Query(() => [EntityType])
  async entitiesStarship() {
    return this.entitiesService.findStarships();
  }

  @Mutation(() => EntityType)
  async createEntity(@Args('input') input: EntityInput) {
    return this.entitiesService.create(input);
  }
}
