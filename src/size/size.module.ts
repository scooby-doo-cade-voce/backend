import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';

@Module({
  controllers: [SizeController],
  providers: [SizeService],
})
export class SizeModule {}
