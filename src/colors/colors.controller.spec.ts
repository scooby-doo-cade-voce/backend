import { Test, TestingModule } from '@nestjs/testing';
import { ColorsController } from './colors.controller';
import { ColorsService } from './colors.service';

describe('ColorsController', () => {
  let controller: ColorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColorsController],
      providers: [ColorsService],
    }).compile();

    controller = module.get<ColorsController>(ColorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
