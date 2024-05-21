import { ApiProperty } from '@nestjs/swagger';
import { Media } from '../../media/entities/media.entity';

export class AnimalDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number; //months
  @ApiProperty()
  description: string;
  @ApiProperty()
  size_id: number;
  @ApiProperty()
  specie_id: number;
  @ApiProperty()
  color_id: number;
  @ApiProperty()
  responsible_id: number; /** Alterado para relacionamento OneToOne */
  @ApiProperty()
  medias?: Media[];
}
