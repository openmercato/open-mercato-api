import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule
    /* TypeOrmModule.forRoot({
      type: 'mongodb',
      synchronize: true,
    }), */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
