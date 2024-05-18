import { Test, TestingModule } from '@nestjs/testing';
import { ResponsibleController } from './responsible.controller';
import { ResponsibleService } from './responsible.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Responsible } from './entities/responsible.entity';

describe('ResponsibleController', () => {
  let controller: ResponsibleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsibleController],
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

    controller = module.get<ResponsibleController>(ResponsibleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
