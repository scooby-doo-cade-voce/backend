import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from '../../animal/entities/animal.entity';

@Entity('medias')
export class Media {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Animal, (animal) => animal.medias)
  animal: Animal;

  @Column()
  url: string;

  @Column()
  mediaType: string;
}
