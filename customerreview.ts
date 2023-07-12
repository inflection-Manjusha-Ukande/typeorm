import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { prodiscount } from './productdiscount';
import { productimg } from './productimage';


@Entity():
export class review {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => productid, (productid) => productid.review)   //many prod one brand
  productids: productid[];

  @Column()
  customerid:number

  @Column()
  verifiedPurchase: string;

  @Column()
  Rating: string;

  @Column()
  Description:String;

  @Column()
  FoundUsefulCount:string;
}