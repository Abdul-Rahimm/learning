import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, GoodbyeService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, GoodbyeService],
})
export class AppModule {}
