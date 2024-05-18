import { Test, TestingModule } from '@nestjs/testing';
import { AnimalService } from './animal.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';

describe('AnimalService', () => {
  let service: AnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnimalService,
        {
          provide: getRepositoryToken(Animal),
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            findAll: jest.fn().mockResolvedValue({}),
            findOne: jest.fn().mockResolvedValue({}),
            find: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<AnimalService>(AnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
