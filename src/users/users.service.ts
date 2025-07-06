import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', role: 'admin' },
    { id: 2, name: 'Jane Smith', role: 'user' },
    { id: 3, name: 'Alice Johnson', role: 'user' },
    { id: 4, name: 'Bob Brown', role: 'admin' },
  ];

  findAll(role?: 'admin' | 'user') {
    if (role) return this.users.filter((user) => user.role === role);

    return this.users;
  }

  findone(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: CreateUserDto) {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findone(id);
    if (!user) return null;

    Object.assign(user, updateUserDto);
    return user;
  }

  delete(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) return null;

    const deletedUser = this.users.splice(userIndex, 1);
    return deletedUser[0];
  }
}
