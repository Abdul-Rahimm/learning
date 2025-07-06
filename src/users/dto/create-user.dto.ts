export class CreateUserDto {
  name: string;
  role: 'admin' | 'user';
}
