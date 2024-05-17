import { Injectable } from '@nestjs/common';

@Injectable()
export class ColorsService {

  findAll() {
    return `This action returns all colors`;
  }

}
