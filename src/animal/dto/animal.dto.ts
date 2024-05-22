import { Media } from '../../media/entities/media.entity';
import { ResponsibleDto } from '../../responsible/dto/responsible.dto';

export class AnimalDto {
  name: string;
  age?: number; //months
  description: string;
  size_id: number;
  specie_id: number;
  color_id: number;
  status: string;
  responsible: ResponsibleDto; /** Alterado para relacionamento OneToOne */
  medias?: Media[];
}
