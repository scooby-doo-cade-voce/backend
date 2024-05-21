import { ApiProperty } from '@nestjs/swagger';

export class SpeciesDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  label: number;
}
