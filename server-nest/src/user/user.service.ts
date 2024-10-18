import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UploadService } from 'src/upload/upload.service';

@Injectable()
export class UserService {

    constructor(
        // El modelo no es un provider, por lo que no es inyectable.
        // Para inyectarlo de una forma con controlada basada en Nest se usa el controlado InjectModel.
        // Se le debe pasar el nombre del modelo que se desea usar. (No es el name de las propiedades definidas en la entidad.)
        @InjectModel(User.name)
        private readonly _userModel: Model<User>,

        private readonly _uploadService: UploadService
    ) { }

    async create(createUserDto: CreateUserDto) {
        try {
            return await this._userModel.create(createUserDto);
        } catch (error) {
            this.hanleExceptions(error);
        }
    }

    private hanleExceptions(error: any) {
        // Exepciones no controladas
        if (error.code === 11000) {
            throw new BadRequestException(`User exists in db ${JSON.stringify(error.keyValue)}`)
        }
        console.log(error)
        throw new InternalServerErrorException(`Can't UPDATE User - Check server logs`);
    }
}
