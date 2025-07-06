import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsEnum(['admin', 'user'], { message: 'Role must be either admin or user' })
  role: 'admin' | 'user';
}
