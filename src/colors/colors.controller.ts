import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColorsService } from './colors.service';
import * as fs from "fs";

@Controller('api/colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) { }

  @Get()
  findAll() {
    const colors = JSON.parse(fs.readFileSync('jsons/colors.json', 'utf-8'));
    return colors;
  }
}
