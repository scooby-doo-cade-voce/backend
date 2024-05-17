import { Test, TestingModule } from '@nestjs/testing';
import { MediaService } from './media.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';

describe('MediaService', () => {
  let service: MediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MediaService,
        {
          provide: getRepositoryToken(Media),
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            createMany: jest.fn().mockResolvedValue({}),
            consult: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    service = module.get<MediaService>(MediaService);
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });
});
