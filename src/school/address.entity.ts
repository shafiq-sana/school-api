import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    town: string;

    @Column()
    tehsil: string;

    @Column()
    district: string;

    @Column()
    state: string;

    @Column()
    address: string;

    @Column('float')
    latitude: number;

    @Column('float')
    longitude: number;
}
