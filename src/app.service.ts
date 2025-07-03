import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class GoodbyeService {
  getGoodbye(): string {
    return 'Goodbye World from service!';
  }
}
