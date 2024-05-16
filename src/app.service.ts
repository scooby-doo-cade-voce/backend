import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { health: string } {
    return { health: 'ok' };
  }
}
