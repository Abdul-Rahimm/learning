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

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
  */

  @Get() // GET /users or /users?role=admin
  findAll(@Query('role') role?: 'admin' | 'user') {
    return ['all users', role];
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: object) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { ...userUpdate, id };
  }

  @Delete(':id') // GET /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
