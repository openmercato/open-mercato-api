import { Module } from '@nestjs/common';
import { MarketplaceStarterController } from './marketplace-starter.controller';
import { MarketplaceStarterService } from './marketplace-starter.service';

@Module({
  imports: [],
  controllers: [MarketplaceStarterController],
  providers: [MarketplaceStarterService],
})
export class MarketplaceStarterModule {}
