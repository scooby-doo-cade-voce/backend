import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';
import * as fs from 'fs';

@Controller('api/status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  findAll() {
    const colors = JSON.parse(fs.readFileSync('jsons/status.json', 'utf-8'));
    return colors;
  }
}
