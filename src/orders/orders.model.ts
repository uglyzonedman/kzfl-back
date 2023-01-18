import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Base } from '../utils/base'
import { UsersModel } from '../users/users.model'

@Entity('orders')
export class OrdersModel extends Base {
  @Column({ default: '' })
  title: string

  @Column({ default: '' })
  description: string

  @Column({ default: 0 })
  price: number

  @Column({ default: 0 })
  views: number

  @ManyToOne(() => UsersModel, users => users.orders,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'user_id' })
  users: UsersModel
}
