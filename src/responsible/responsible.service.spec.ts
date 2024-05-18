import { Test, TestingModule } from '@nestjs/testing';
import { ResponsibleService } from './responsible.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Responsible } from './entities/responsible.entity';

describe('ResponsibleService', () => {
  let service: ResponsibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResponsibleService,
        {
          provide: getRepositoryToken(Responsible),
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            findAll: jest.fn().mockResolvedValue({}),
            findOne: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<ResponsibleService>(ResponsibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
