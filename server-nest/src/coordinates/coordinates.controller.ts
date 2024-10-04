import { Controller, Get, Param } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';

@Controller('coordinates')
export class CoordinatesController {

    constructor(
        private readonly CoordinatesService: CoordinatesService
    ) { }


    @Get(':character')
    getByCharacterName(@Param('character') character: string) {

    }
}
