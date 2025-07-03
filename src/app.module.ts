import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, GoodbyeService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GoodbyeService],
})
export class AppModule {}
