import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto } from './dto/animal.dto';
import { AnimalGetPatchDto } from './dto/animalGetPatch.dto';

@Controller('api/animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  create(@Body() animalDto: AnimalDto) {
    return this.animalService.create(animalDto);
  }

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
