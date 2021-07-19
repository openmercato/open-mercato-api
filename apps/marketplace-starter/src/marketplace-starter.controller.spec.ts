import { Test, TestingModule } from '@nestjs/testing';
import { MarketplaceStarterController } from './marketplace-starter.controller';
import { MarketplaceStarterService } from './marketplace-starter.service';

describe('MarketplaceStarterController', () => {
  let marketplaceStarterController: MarketplaceStarterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MarketplaceStarterController],
      providers: [MarketplaceStarterService],
    }).compile();

    marketplaceStarterController = app.get<MarketplaceStarterController>(MarketplaceStarterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(marketplaceStarterController.getHello()).toBe('Hello World!');
    });
  });
});
