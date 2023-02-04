import {
  Body,
  Controller, Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { OrdersService } from './orders.service'
import { EblanUser, User } from '../users/decorators/users.decorator'
import { OrdersDto } from './dto/orders.dto'
import { JwtAuthGuard } from '../auth/guards/jwt.guard'
import { OrderResponseDTO } from "../orders-response/orders-response.dto";

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService,) { }

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

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Get('')
  // @UseGuards(JwtAuthGuard)
  async getAll() {
    return this.ordersService.getAll()
  }


  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Get(':id')
  async getById(@Param("id") id: number) {
    return this.ordersService.getById(id)
  }

  @UsePipes(new ValidationPipe())
  @Post('view/:id')
  @HttpCode(200)
  async updateView(@Param("id") id: number) {
    return this.ordersService.updateView(id)
  }
  // @UsePipes(new ValidationPipe())
  // @Post('create/response')
  // @HttpCode(200)
  // async createOrderResponse(@EblanUser('id') userId: number, @Body() dto: OrderResponseDTO) {
  //   return this.ordersService.createOrderResponse(userId, dto)
  // }

}
