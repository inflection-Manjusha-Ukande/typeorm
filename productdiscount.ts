import { Entity,PrimaryGeneratedColumn,Column,OneToMany } from 'typeorm';
import {productimg} from './productimage';

@Entity():
export class prodiscount {
  @PrimaryGeneratedColumn():
  Merchantid: number;

  @OneToMany(() => productid, (productid) => productid.prodiscount)   
  productid: productid[];

  @Column():
  discount: number;

  @Column():
  discountforvolume: number;

  @Column():
  disounttype:number;
}