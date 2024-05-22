import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Animal } from '../../animal/entities/animal.entity';

@Entity()
export class Responsible {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  cellphone: string;

  @Column({ nullable: true })
  email?: string;

  @OneToOne(() => Animal, (animal) => animal.responsible)
  @JoinColumn()
  animal?: Animal;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at',
  })
  createdAt?: Date;

  /* @UpdateDateColumn({
    type: 'timestamp',
    default: () => "CURRENT_TIMESTAMP(6)", name: 'updated_at'
  })
  updatedAt?: Date; */

  /* @DeleteDateColumn({
    type: 'timestamp',
    default: () => "CURRENT_TIMESTAMP(6)", name: 'deleted_at'
  })
  deletedAt?: Date; */
}
