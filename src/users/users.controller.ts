import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { Roles } from '../auth/decorators/roles.decorator'
import { RolesGuard } from '../auth/guards/role.guard'
import { JwtAuthGuard } from '../auth/guards/jwt.guard'
import { User } from './decorators/users.decorator'
import { UsersDto } from './dto/users.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Get('all')
  // @Roles('Админ')
  // @UseGuards(RolesGuard)
  async getAll() {
    return this.usersService.getAll()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Get('profile/:id')
  async getProfileUser(@Param('id') id: number) {
    return this.usersService.getById(id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@User('id') id: number) {
    return this.usersService.getById(id)
  }

  @UsePipes(new ValidationPipe())
  @Put('profile')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async updateProfile(@User('id') id: number, @Body() dto: any) {
    return this.usersService.updateProfile(id, dto)
  }
}
