import { Controller, Get } from '@nestjs/common';
import { MarketplaceStarterService } from './marketplace-starter.service';

@Controller()
export class MarketplaceStarterController {
  constructor(private readonly marketplaceStarterService: MarketplaceStarterService) {}

  @Get()
  getHello(): string {
    return this.marketplaceStarterService.getHello();
  }
}
