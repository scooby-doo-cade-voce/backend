import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';
import * as fs from 'fs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Status')
@Controller('api/status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  @ApiOperation({ summary: 'Get all status of the animals' })
  findAll() {
    const colors = JSON.parse(fs.readFileSync('jsons/status.json', 'utf-8'));
    return colors;
  }
}
