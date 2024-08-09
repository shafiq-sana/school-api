import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Address } from './address.entity';
import { Organization } from './organization.entity';

@Entity()
export class School {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: string;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @Column()
    shift: string;

    @Column()
    hasProjector: boolean;

    @Column()
    hasLaptop: boolean;

    @OneToOne(() => Address)
    @JoinColumn({ name: 'addressId' })
    address: Address;

    @ManyToOne(() => Organization)
    @JoinColumn({ name: 'organizationId' })
    organization: Organization;
}
