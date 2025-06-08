import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Shorten {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    url: string;
    @Column()
    shortCode: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @Column({ default: 0 })
    accessCount: number;
}