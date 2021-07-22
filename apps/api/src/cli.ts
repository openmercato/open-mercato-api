import { NestFactory } from '@nestjs/core';
import { AppService } from './app.service';
import { CliModule } from './cli.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(CliModule);
  const appServ = app.get(AppService)
  console.log(appServ.getHello());
  
}
bootstrap();