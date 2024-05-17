import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeciesService } from './species.service';
import * as fs from "fs";

@Controller('api/species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) { }

  @Get()
  findAll() {
    const species = JSON.parse(fs.readFileSync('jsons/species.json', 'utf-8'));
    return species;
  }
}
