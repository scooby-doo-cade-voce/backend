import { Controller } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('api/medias')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}
}
