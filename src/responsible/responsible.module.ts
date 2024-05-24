import { Module } from '@nestjs/common';
import { ResponsibleService } from './responsible.service';
import { ResponsibleController } from './responsible.controller';
import { Responsible } from './entities/responsible.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Responsible])],
  controllers: [ResponsibleController],
  providers: [ResponsibleService],
})
export class ResponsibleModule { }
