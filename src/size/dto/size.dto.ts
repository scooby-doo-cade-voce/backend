import { ApiProperty } from '@nestjs/swagger';

export class Size {
  @ApiProperty()
  id: number;
  @ApiProperty()
  label: string;
}
