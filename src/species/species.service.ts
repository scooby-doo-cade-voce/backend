import { Injectable } from '@nestjs/common';


@Injectable()
export class SpeciesService {
  // create(createSpeciesDto: CreateSpeciesDto) {
  //   return 'This action adds a new species';
  // }

  findAll() {
    return `This action returns all species`;
  }

  findOne(id: number) {
    return `This action returns a #${id} species`;
  }

  // update(id: number, updateSpeciesDto: UpdateSpeciesDto) {
  //   return `This action updates a #${id} species`;
  // }

  remove(id: number) {
    return `This action removes a #${id} species`;
  }
}
