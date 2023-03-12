import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
class StarshipType {
  @Field()
  readonly name: string;
  @Field()
  readonly starshipImg: string;
}

@ObjectType()
export class EntityType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly img: string;
  @Field(() => Int)
  readonly mass: number;
  @Field(() => StarshipType)
  starship: StarshipType;
}
