import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { JwtStrategy } from '../auth/stratigies/jwt.strategy'
import { UsersModel } from '../users/users.model'
import { OrdersResponseModel } from '../orders-response/orders-response.model'
import { OrdersResponseService } from './orders-response.service'
import { OrdersModel } from 'src/orders/orders.model'
import { OrdersResponseController } from './orders-response.controller'

@Module({
    controllers: [OrdersResponseController],
    providers: [OrdersResponseService, JwtService, JwtStrategy],
    imports: [TypeOrmModule.forFeature([OrdersModel, UsersModel, OrdersResponseModel]), ConfigModule],
})
export class OrdersResponseModule { }
