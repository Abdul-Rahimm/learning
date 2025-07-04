import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
  */
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=admin
  findAll(@Query('role') role?: 'admin' | 'user') {
    return this.usersService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findone(parseInt(id, 10));
  }

  @Post() // POST /users
  create(@Body() user: { name: string; role: 'admin' | 'user' }) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return this.usersService.update(parseInt(id, 10), userUpdate);
  }

  @Delete(':id') // GET /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(parseInt(id, 10));
  }
}
