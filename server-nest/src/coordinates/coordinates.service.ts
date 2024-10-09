import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Coordinates } from './entities/coordinates.entity';
import { Model } from 'mongoose';

@Injectable()
export class CoordinatesService {
    constructor(
        // El modelo no es un provider, por lo que no es inyectable.
        // Para inyectarlo de una forma con controlada basada en Nest se usa el controlado InjectModel.
        // Se le debe pasar el nombre del modelo que se desea usar. (No es el name de las propiedades definidas en la entidad.)
        @InjectModel(Coordinates.name)
        private readonly _coordinatesModel: Model<Coordinates>
    ) { }

    async findOne(character: string) {
        try {
            const coordinates = await this._coordinatesModel.findOne({ character });

            if (!coordinates) throw new NotFoundException(`Character coordinates with name: ${character} not found`);

            return coordinates;
        } catch (error) {
            this._handleExceptions(error);
        }

    }

    private _handleExceptions(error: any) {
        if (error.code === 11000)
            throw new BadRequestException(`Coordinates exist in DB ${JSON.stringify(error.keyValue)}`)

        console.log(error)
        throw new InternalServerErrorException(`${error}`)
    }
}
