import {
  Body,
  Controller,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { OrdersService } from './orders.service'
import { User } from '../users/decorators/users.decorator'
import { OrdersDto } from './dto/orders.dto'
import { JwtAuthGuard } from '../auth/guards/jwt.guard'

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createOrder(@User('id') ownerId: number, @Body() dto: OrdersDto) {
    return this.ordersService.create(ownerId, dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('update/:id')
  @UseGuards(JwtAuthGuard)
  async updateOrder(@Param('id') id: number, @Body() dto: OrdersDto) {
    return this.ordersService.update(id, dto)
  }
}
