import { IsIn, IsInt, IsPositive, IsString } from "class-validator";

export class CreateCoordinates {
    @IsString()
    character: string;

    @IsInt()
    @IsPositive()
    x: number;

    @IsInt()
    @IsPositive()
    y: number
}