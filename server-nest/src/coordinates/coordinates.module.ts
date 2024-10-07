import { Module } from '@nestjs/common';
import { CoordinatesController } from './coordinates.controller';
import { CoordinatesService } from './coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Coordinates, CoordinatesSchema } from './entities/coordinates.entity';

@Module({
  controllers: [CoordinatesController],
  providers: [CoordinatesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Coordinates.name,
        schema: CoordinatesSchema
      }
    ])
  ]
})
export class CoordinatesModule { }
