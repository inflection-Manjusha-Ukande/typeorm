import { Entity,PrimaryGeneratedColumn,OneToMany,Column } from 'typeorm';
import { prodiscount } from './productdiscount';

@Entity()
export class productimg{

    @column()
    productid:number

    @column()
    imageurl:string
}


