import { UsersModel } from "src/users/users.model";
import { Base } from "src/utils/base";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { OrdersModel } from "../orders/orders.model";

@Entity('orders-response')
export class OrdersResponseModel extends Base {


  @Column({ default: 0 })
  price: number

  @Column({ default: 0 })
  day: number

  @Column({ default: "" })
  comments: string


  @ManyToOne(() => UsersModel, owner => owner.ordersResponse, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'owner_id' })
  owner: UsersModel

  @ManyToOne(() => OrdersModel, orders => orders.ordersResponse, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_id' })
  orders: OrdersModel

  @Column({ default: false })
  accept: boolean
}
