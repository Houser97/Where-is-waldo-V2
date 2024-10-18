import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly _userService: UserService
    ) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this._userService.create(createUserDto);
    }
}
