import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsInt()
    @IsPositive()
    time: number;

    @IsString()
    game: string;

    @IsOptional()
    @IsString()
    image: string;
}