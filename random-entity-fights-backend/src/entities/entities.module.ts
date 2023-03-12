import { Module } from '@nestjs/common';
import { EntitiesResolver } from './entities.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { EntitySchema } from './entities.schema';
import { EntitiesService } from './entities.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Entity', schema: EntitySchema }]),
  ],
  providers: [EntitiesResolver, EntitiesService],
})
export class EntitiesModule {}
