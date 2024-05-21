import { Controller, Get } from '@nestjs/common';
import { ColorsService } from './colors.service';
import * as fs from 'fs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Colors')
@Controller('api/colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  @Get()
  @ApiOperation({ summary: 'Get list of the colors of the animals' })
  findAll() {
    const colors = JSON.parse(fs.readFileSync('jsons/colors.json', 'utf-8'));
    return colors;
  }
}
