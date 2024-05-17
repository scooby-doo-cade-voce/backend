import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
