import { Injectable } from '@nestjs/common';
import { ResponsibleDto } from './dto/responsible.dto';
import { Repository } from 'typeorm';
import { Responsible } from './entities/responsible.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ResponsibleService {
  constructor(
    @InjectRepository(Responsible)
    private readonly responsibleRepository: Repository<Responsible>,
  ) {}

  create(responsible: ResponsibleDto) {
    let newResponsible = new Responsible();
    newResponsible = { ...responsible };

    return this.responsibleRepository.save(newResponsible);
  }

  findAll() {
    return this.responsibleRepository.find();
  }

  findOne(id: number) {
    return this.responsibleRepository.findOneBy({ id: id });
  }

  /* update(id: number, updateResponsibleDto: ResponsibleDto) {
    return `This action updates a #${id} responsible`;
  } */

  async remove(id: number): Promise<void> {
    await this.responsibleRepository.delete(id);
  }
}
