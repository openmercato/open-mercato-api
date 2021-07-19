import { NestFactory } from '@nestjs/core';
import { MarketplaceStarterModule } from './marketplace-starter.module';

async function bootstrap() {
  const app = await NestFactory.create(MarketplaceStarterModule);
  await app.listen(3000);
}
bootstrap();
