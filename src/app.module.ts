import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import knexConfig from '../knexconfig';
import { KnexModule } from 'nest-knexjs';
@Module({
  imports: [
    KnexModule.forRoot(knexConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
