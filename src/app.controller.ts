import { Controller, Get } from '@nestjs/common';
import { AppService, GoodbyeService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly goodbyeService: GoodbyeService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('goodbye')
  getGoodbye(): string {
    return this.goodbyeService.getGoodbye();
  }
}
