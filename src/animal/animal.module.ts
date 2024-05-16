import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
