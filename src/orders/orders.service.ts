import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { OrdersModel } from './orders.model'
import { OrdersDto } from './dto/orders.dto'

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersModel) private readonly ordersModel: Repository<OrdersModel>,
  ) {}

  async create(ownerId: number, dto: OrdersDto) {
    const defaultValue = {
      title: '',
      description: '',
      price: 0,
      views: 0,
      users: { id: ownerId },
    }
    const newOrder = await this.ordersModel.create(defaultValue)
    const order = await this.ordersModel.save(newOrder)
    return order.id
  }

  async update(orderId: number, dto: OrdersDto) {
    const order = await this.ordersModel.findOne({ where: { id: orderId } })

    return this.ordersModel.save({ ...order, ...dto })
  }

  async getAll() {
    return await this.ordersModel.find()
  }
}
