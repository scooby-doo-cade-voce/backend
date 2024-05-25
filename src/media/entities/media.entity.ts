import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../../animal/entities/animal.entity';
import { IsNotEmpty } from 'class-validator';

@Entity('medias')
export class Media {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Animal, (animal) => animal.medias)
  animal: Animal;

  @Column()
  @IsNotEmpty()
  url: string;

  @Column()
  @IsNotEmpty()
  mediaType: string;
}
