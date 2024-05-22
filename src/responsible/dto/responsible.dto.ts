import { ApiProperty } from '@nestjs/swagger';

export class ResponsibleDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  cellphone: string;
  @ApiProperty()
  email?: string;
}
