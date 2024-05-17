import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SizeService } from './size.service';
import * as fs from "fs";

@Controller('api/sizes')
export class SizeController {
  constructor(private readonly sizeService: SizeService) { }

  @Get()
  findAll() {
    const sizes = JSON.parse(fs.readFileSync('jsons/sizes.json', 'utf-8'));
    return sizes;
  }
}
