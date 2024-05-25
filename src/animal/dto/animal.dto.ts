import { ApiProperty } from '@nestjs/swagger';
import { Media } from '../../media/entities/media.entity';
import { ResponsibleDto } from '../../responsible/dto/responsible.dto';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AnimalDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  age?: number; //months

  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  size_id: number;

  @ApiProperty()
  @IsNotEmpty()
  specie_id: number;

  @ApiProperty()
  @IsNotEmpty()
  color_id: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => ResponsibleDto)
  responsible: ResponsibleDto; /** Alterado para relacionamento OneToOne */

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Media)
  medias?: Media[];
}
