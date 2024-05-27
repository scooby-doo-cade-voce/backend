import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto } from './dto/animal.dto';
import { AnimalGetPatchDto } from './dto/animalGetPatch.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponsibleDto } from '../responsible/dto/responsible.dto';
import { MediaDto } from '../media/dto/media.dto';

@ApiTags('Animals')
@Controller('api/animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}
  @Post()
  @ApiOperation({ summary: 'Create an animal' })
  @ApiResponse({
    status: 201,
    description: 'Animal has been successfully created',
  })
  @ApiParam({
    name: 'medias',
    type: MediaDto,
    description: 'Here goes the url that have the animal image',
    example: {
      url: 'https://imgur.com',
      mediaType: 'jpeg/jpg',
    },
    required: true,
  })
  @ApiParam({
    name: 'responsible',
    type: ResponsibleDto,
    description: 'Here goes the responsible_id of animal',
    example: {
      name: 'Joãozinho',
      cellhpone: '1234567',
      email: 'teste@gmail.com',
    },
    required: true,
  })
  @ApiParam({
    name: 'specie_id',
    type: Number,
    description: 'Here goes the specie_id of animal',
    example: 1,
    required: true,
  })
  @ApiParam({
    name: 'size_id',
    type: Number,
    description: 'Here goes the size_id of animal',
    example: 1,
    required: true,
  })
  @ApiParam({
    name: 'description',
    type: String,
    description: 'Here is a brief description of animal',
    example: 'It is small dog, light brown with black eyes',
    required: false,
  })
  @ApiParam({
    name: 'age',
    type: Number,
    description: 'age of animal',
    example: 5,
    required: true,
  })
  @ApiParam({
    name: 'name',
    type: String,
    description: 'Name of animal',
    example: 'Dinck',
    required: true,
  })
  create(@Body() animalDto: AnimalDto) {
    return this.animalService.create(animalDto);
  }

  @ApiOperation({ summary: 'Get all animals' })
  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get('/search')
  async find(@Req() req: any) {
    const animalQuery: AnimalGetPatchDto = req.query;

    // Verifica se algum parâmetro foi enviado
    if (JSON.stringify(animalQuery) !== '{}') {
      return this.animalService.find(animalQuery);
    } else {
      return {
        error: 'Você precisa especificar ao menos um item para pesquisar.',
      };
    }
  }

  /*  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  } */
}
