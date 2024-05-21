import { ApiProperty } from "@nestjs/swagger";

export class ColorsDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  label: number;
}
