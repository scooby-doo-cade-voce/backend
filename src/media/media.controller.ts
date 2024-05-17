import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaQueryDto } from './dto/media.query.dto';
import { MediaDto } from './dto/media.dto';

@Controller('api/medias')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  async create(@Body() mediaDto: MediaDto) {
    return this.mediaService.create(mediaDto);
  }

  @Get()
  async find(@Req() req: any) {
    const mediaQuery: MediaQueryDto = req.query;

    return this.mediaService.consult(mediaQuery);
  }
}
