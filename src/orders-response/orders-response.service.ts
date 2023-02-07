import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrderResponseDTO } from "./orders-response.dto";
import { OrdersResponseModel } from "./orders-response.model";

@Injectable()
export class OrdersResponseService {
    constructor(
        @InjectRepository(OrdersResponseModel) private readonly ordersResponseModel: Repository<OrdersResponseModel>,
    ) { }

    async createOrderResponse(ownerId: number, dto: OrderResponseDTO) {
        const defaultValue = {
            comments: dto.comments,
            day: dto.day,
            price: dto.price,
            owner: {
                id: ownerId
            },
            orders: {
                id: dto.ordersId
            }
        }
        const newOrder = await this.ordersResponseModel.create(defaultValue)
        const order = await this.ordersResponseModel.save(newOrder)
        return order.id
    }

    async getFullResponseByOrderId(id: number) {
        return await this.ordersResponseModel.find({ where: { orders: { id: id } }, relations: { owner: { professionsSelected: { professions: true } } } })
    }
}
