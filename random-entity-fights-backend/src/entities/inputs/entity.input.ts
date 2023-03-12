import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class Starship {
  @Field()
  readonly name: string;
  @Field()
  readonly starshipImg: string;
}

@InputType()
export class EntityInput {
  @Field()
  readonly name: string;
  @Field()
  readonly img: string;
  @Field(() => Int)
  readonly mass: number;
  @Field(() => Starship)
  starship: Starship;
}
