import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('signup')
    signup(@Body() body) {
        return this.usersService.create(body);
    }

    @Post('login')
    async login(@Body('email') email: string) {
        const user = await this.usersService.findByEmail(email);

        if (!user) {
            return { status: false, message: 'User not found' };
        }

        return {
            status: true,
            user,
        };
    }

    @Get()
    getUsers() {
        return this.usersService.findAll();
    }
}

