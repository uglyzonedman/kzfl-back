import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { OrdersController } from './orders.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OrdersModel } from './orders.model'
import { ConfigModule } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { JwtStrategy } from '../auth/stratigies/jwt.strategy'
import { UsersModel } from '../users/users.model'

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, JwtService, JwtStrategy],
  imports: [TypeOrmModule.forFeature([OrdersModel, UsersModel]), ConfigModule],
})
export class OrdersModule {}
