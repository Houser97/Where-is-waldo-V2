import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Coordinates extends Document {
    @Prop({
        unique: true,
        index: true
    })
    character: string;

    x: number;
    y: number;
}

export const CoordinatesSchema = SchemaFactory.createForClass(Coordinates);