import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


export abstract class Base {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt

    @UpdateDateColumn({ name: 'update_at' })
    updateAt
}