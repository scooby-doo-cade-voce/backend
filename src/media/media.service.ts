import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './entities/media.entity';
import { MediaDto } from './dto/media.dto';
import { MediaQueryDto } from './dto/media.query.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  create(media: MediaDto): Promise<Media> {
    const newMedia = this.mediaRepository.create({
      ...media,
    });
    return this.mediaRepository.save(newMedia);
  }

  createMany(medias: MediaDto[]): Promise<Media[]> {
    const newMedias = medias.map((media) =>
      this.mediaRepository.create({ ...media }),
    );

    return this.mediaRepository.save(newMedias);
  }

  consult(queryParams: MediaQueryDto): Promise<Media[]> {
    return this.mediaRepository.findBy(queryParams);
  }
}
