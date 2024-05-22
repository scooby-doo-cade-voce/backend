import { ApiProperty } from '@nestjs/swagger';
import { Media } from '../../media/entities/media.entity';
import { ResponsibleDto } from '../../responsible/dto/responsible.dto';

export class AnimalDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  age?: number; //months
  @ApiProperty()
  description: string;
  @ApiProperty()
  size_id: number;
  @ApiProperty()
  specie_id: number;
  @ApiProperty()
  color_id: number;
  @ApiProperty()
  status: string;
  @ApiProperty()
  responsible: ResponsibleDto; /** Alterado para relacionamento OneToOne */
  @ApiProperty()
  medias?: Media[];
}
