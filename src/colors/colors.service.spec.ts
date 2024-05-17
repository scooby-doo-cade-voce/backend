import { Test, TestingModule } from '@nestjs/testing';
import { ColorsService } from './colors.service';

describe('ColorsService', () => {
  let service: ColorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColorsService],
    }).compile();

    service = module.get<ColorsService>(ColorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
