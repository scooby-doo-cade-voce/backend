import { Responsible } from 'src/responsible/entities/responsible.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
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

    @OneToOne(() => Responsible, (responsible => (responsible.id)))
    responsible_id: number;

    @Column({ nullable: true })
    age?: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => "CURRENT_TIMESTAMP(6)", name: 'created_at'
    })
    createdAt?: Date;
}
