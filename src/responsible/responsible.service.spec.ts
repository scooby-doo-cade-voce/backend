import { Test, TestingModule } from '@nestjs/testing';
import { ResponsibleService } from './responsible.service';

describe('ResponsibleService', () => {
  let service: ResponsibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponsibleService],
    }).compile();

    service = module.get<ResponsibleService>(ResponsibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
