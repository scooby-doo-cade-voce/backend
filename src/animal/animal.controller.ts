import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto } from './dto/animal.dto';
import { AnimalGetPatchDto } from './dto/animalGetPatch.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Media } from 'src/media/entities/media.entity';
import { ResponsibleDto } from 'src/responsible/dto/responsible.dto';
import { MediaDto } from 'src/media/dto/media.dto';

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
    const reqBody = animalDto;

    const requiredFields = [
      'name',
      'size_id',
      'specie_id',
      'color_id',
      'responsible',
      'medias',
    ];
    const responsibleFields = ['name', 'cellphone'];

    // Validação campos animal
    for (const field of requiredFields) {
      if (!reqBody[field]) {
        throw new BadRequestException(`The parameter '${field}' is required.`);
      }
    }

    // Validação campos responsável
    for (const resField of responsibleFields) {
      if (!reqBody.responsible[resField]) {
        throw new BadRequestException(
          `The parameter '${resField}' for responsible is required.`,
        );
      }
    }

    if (!Array.isArray(reqBody.medias) || reqBody.medias.length === 0) {
      throw new BadRequestException('You need to send 1 image.');
    }

    reqBody.medias.map((media: Media) => {
      if (!media.url || !media.mediaType) {
        throw new BadRequestException(
          "The image parameters: 'url' and 'mediaType' are requireds.",
        );
      }
    });

    return this.animalService.create(reqBody);
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
