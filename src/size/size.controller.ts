import { Controller, Get } from '@nestjs/common';
import { SizeService } from './size.service';
import * as fs from 'fs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Sizes')
@Controller('api/sizes')
export class SizeController {
  constructor(private readonly sizeService: SizeService) {}

  @Get()
  @ApiOperation({ summary: 'Get the sizes of the animals' })
  findAll() {
    const sizes = JSON.parse(fs.readFileSync('jsons/sizes.json', 'utf-8'));
    return sizes;
  }
}
