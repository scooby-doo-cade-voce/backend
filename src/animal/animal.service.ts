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
  ) {}

  create(animal: AnimalDto) {
    let newAnimal = new Animal();
    newAnimal = { ...animal };

    return this.animalRepository.save(newAnimal);
  }

  findAll() {
    return this.animalRepository.find();
  }

  findOne(id: number) {
    return this.animalRepository.findOne({
      where: {
        id,
      },
    });
  }

  find(animal: AnimalGetPatchDto) {
    return this.animalRepository.findBy(animal);
  }

  /* update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  } */
}
