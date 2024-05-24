import { Injectable } from '@nestjs/common';
import { AnimalDto } from './dto/animal.dto';
import { Animal } from './entities/animal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnimalGetPatchDto } from './dto/animalGetPatch.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>,
  ) { }

  create(animal: AnimalDto) {
    let newAnimal = new Animal();
    newAnimal = { ...animal };
    return this.animalRepository.save(newAnimal).catch((error) => error);
  }

  findAll() {
    return this.animalRepository.find({
      relations: ['medias', 'responsible'],
    });
  }

  findOne(id: number) {
    return this.animalRepository.findOne({
      where: {
        id,
      },
      relations: ['medias', 'responsible'],
    });
  }

  find(animal: AnimalGetPatchDto) {
    return this.animalRepository.find({
      where: animal,
      relations: ['medias', 'responsible'],
    });
  }

  /* update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  } */
}
