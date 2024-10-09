import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class User extends Document {
    @Prop({
        unique: true
    })
    username: string;
    @Prop({
        default: 'https://res.cloudinary.com/dluwqcce9/image/upload/v1694961227/InTouch/qqaarw68ruwwluvcphkh.jpg'
    })
    image: string;
    game: string;
    time: number;
}

export const UserSchema = SchemaFactory.createForClass(User);