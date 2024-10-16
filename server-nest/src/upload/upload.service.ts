import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import cloudinary, { configureCloudinary } from 'src/config/cloudinay.config';

@Injectable()
export class UploadService {

    constructor(
        private readonly configService: ConfigService
    ) {
        configureCloudinary(this.configService);
    }

    async uploadBase64Image(base64Image: string) {

        //const base64Str = base64Image.split(',')[1];
        const base64Str = base64Image

        const result = await cloudinary.uploader.upload(`data:image/png;base64,${base64Str}`, {
            folder: this.configService.get<string>('CLOUDINARY_FOLDER')
        });
        return result;
    }
}
