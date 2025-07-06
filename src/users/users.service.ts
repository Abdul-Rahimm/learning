import { Injectable, NotFoundException } from '@nestjs/common';
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
    if (role) {
      if (['admin', 'user'].includes(role) == false)
        throw new NotFoundException(`Role ${role} not found`);

      const usersArray = this.users.filter((user) => user.role === role);
      if (usersArray.length === 0)
        throw new NotFoundException(`No users found with role ${role}`);

      return usersArray;
    }

    return this.users;
  }

  findone(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
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
