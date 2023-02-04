import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { OrdersModel } from './orders.model'
import { OrdersDto } from './dto/orders.dto'
import { OrderResponseDTO } from "../orders-response/orders-response.dto";
import { OrdersResponseModel } from "../orders-response/orders-response.model";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersModel) private readonly ordersModel: Repository<OrdersModel>,
    @InjectRepository(OrdersResponseModel) private readonly ordersResponseModel: Repository<OrdersResponseModel>,
  ) { }

  async create(ownerId: number, dto: OrdersDto) {
    const defaultValue = {
      title: dto.title,
      description: dto.description,
      price: dto.price,
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

  async getById(id: number) {
    const currentOrder = await this.ordersModel.findOneBy({ id })

    if (!currentOrder) throw new BadRequestException('Такого заказа нет')

    return currentOrder
  }


  async updateView(id: number) {
    const order = await this.ordersModel.findOne({
      where: { id },
    })

    if (!order) throw new BadRequestException('Заказ не найден')


    order.views++
    return await this.ordersModel.save(order)

  }

  // async createOrderResponse(userId: number, dto: OrderResponseDTO) {
  //   const defaultValue = {
  //     comments: dto.comments,
  //     day: dto.day,
  //     price: dto.price,
  //     users: {
  //       id: userId
  //     },
  //     orders: {
  //       id: dto.ordersId
  //     }
  //   }
  //   const newOrder = await this.ordersResponseModel.create(defaultValue)
  //   const order = await this.ordersResponseModel.save(newOrder)
  //   return order.id
  // }
}
