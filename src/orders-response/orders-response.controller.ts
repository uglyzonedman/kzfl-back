import { Body, Controller, HttpCode, Param, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common"
import { Get } from "@nestjs/common/decorators"
import { JwtAuthGuard } from "src/auth/guards/jwt.guard"
import { EblanUser, User } from "src/users/decorators/users.decorator"
import { OrderResponseDTO } from "./orders-response.dto"
import { OrdersResponseService } from "./orders-response.service"

@Controller('orders')
export class OrdersResponseController {
    constructor(private readonly ordersResponseService: OrdersResponseService) { }


    @UsePipes(new ValidationPipe())
    @Post('create/response')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async createOrderResponse(@User('id') ownerId: number, @Body() dto: OrderResponseDTO) {
        return this.ordersResponseService.createOrderResponse(ownerId, dto)
    }

    @UsePipes(new ValidationPipe())
    @Get('response/all/:id')
    @HttpCode(200)
    async getFullResponseByOrderId(@Param('id') id: number,) {
        return this.ordersResponseService.getFullResponseByOrderId(id)
    }
}
