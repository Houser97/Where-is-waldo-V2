import { Controller, Post, Body } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @Post()
    async uploadImage(@Body('image') base64Image: string) {
        return this.uploadService.uploadBase64Image(base64Image);
    }
}