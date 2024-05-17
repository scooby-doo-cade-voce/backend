import { Test, TestingModule } from '@nestjs/testing';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';

describe('AnimalController', () => {
  let controller: AnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalController],
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

    controller = module.get<AnimalController>(AnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
