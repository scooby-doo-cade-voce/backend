import { Controller, Get } from '@nestjs/common';
import { SpeciesService } from './species.service';
import * as fs from 'fs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Species')
@Controller('api/species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all species of the animals' })
  findAll() {
    const species = JSON.parse(fs.readFileSync('jsons/species.json', 'utf-8'));
    return species;
  }
}
