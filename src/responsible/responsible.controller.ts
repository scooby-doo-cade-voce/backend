import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleDto } from './dto/responsible.dto';

@Controller('api/responsibles')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}

  @Post()
  create(@Body() responsibleDto: ResponsibleDto) {
    return this.responsibleService.create(responsibleDto);
  }

  @Get()
  findAll() {
    return this.responsibleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.responsibleService.findOne(+id);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() responsibleDto: ResponsibleDto) {
    return this.responsibleService.update(+id, responsibleDto);
  } */

  /* @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsibleService.remove(+id);
  } */
}
