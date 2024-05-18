import { Injectable } from '@nestjs/common';

@Injectable()
export class SizeService {
  // create(createSizeDto: CreateSizeDto) {
  //   return 'This action adds a new size';
  // }

  findAll() {
    return `This action returns all size`;
  }

  findOne(id: number) {
    return `This action returns a #${id} size`;
  }

  // update(id: number, updateSizeDto: UpdateSizeDto) {
  //   return `This action updates a #${id} size`;
  // }

  remove(id: number) {
    return `This action removes a #${id} size`;
  }
}
