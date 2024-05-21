import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
  findAll() {
    return `This action returns all colors`;
  }
}
