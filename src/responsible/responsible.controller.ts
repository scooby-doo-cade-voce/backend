import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleDto } from './dto/responsible.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Responsibles')
@Controller('api/responsibles')
export class ResponsibleController {
  constructor(private readonly responsibleService: ResponsibleService) {}
  @Post()
  @ApiOperation({ summary: 'Create a responsible of animal' })
  @ApiResponse({
    status: 201,
    description: 'Responsible has been successfully created',
  })
  @ApiParam({
    name: 'deleteAt',
    type: Date,
    description: 'Date that responsible goes delete',
    required: false,
  })
  @ApiParam({
    name: 'updateAt',
    type: Date,
    description: 'Date that responsible goes update',
    required: false,
  })
  @ApiParam({
    name: 'createdAt',
    type: Date,
    description: 'Date that responsible goes create',
    required: true,
  })
  @ApiParam({
    name: 'email',
    type: String,
    description: 'Email of responsible',
    required: true,
  })
  @ApiParam({
    name: 'cellphone',
    type: String,
    description: 'Cellphone number of responsible',
    required: true,
  })
  @ApiParam({
    name: 'name',
    type: String,
    description: 'Name of responsible',
    required: true,
  })
  create(@Body() responsibleDto: ResponsibleDto) {
    return this.responsibleService.create(responsibleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all responsibles that exists' })
  findAll() {
    return this.responsibleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a responsible from id' })
  findOne(@Param('id') id: string) {
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
