import { Test, TestingModule } from '@nestjs/testing';
import { ResponsibleController } from './responsible.controller';
import { ResponsibleService } from './responsible.service';

describe('ResponsibleController', () => {
  let controller: ResponsibleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsibleController],
      providers: [ResponsibleService],
    }).compile();

    controller = module.get<ResponsibleController>(ResponsibleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
