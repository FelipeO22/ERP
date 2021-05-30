import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Factura {

   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50})
   numero: string;

}