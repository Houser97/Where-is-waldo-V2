import { Controller, Get, Param } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';

@Controller('coordinates')
export class CoordinatesController {

    constructor(
        private readonly coordinatesService: CoordinatesService
    ) { }


    @Get(':character')
    findByCharacterName(@Param('character') character: string) {
        return this.coordinatesService.findOne(character);
    }
}
