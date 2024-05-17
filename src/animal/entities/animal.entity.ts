import { Responsible } from 'src/responsible/entities/responsible.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Media } from '../../media/entities/media.entity';

@Entity('animals')
export class Animal {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  size_id: number;

  @Column()
  specie_id: number;

  @Column()
  color_id: number;

  @OneToOne(() => Responsible, (responsible) => responsible.id)
  responsible_id: number;

  @Column({ nullable: true })
  age?: number;

  @OneToMany(() => Media, (media) => media.animal, {
    cascade: ['insert'],
  })
  medias?: Media[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at',
  })
  createdAt?: Date;
}
