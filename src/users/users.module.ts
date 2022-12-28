import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModel } from './users.model'
import { ConfigModule } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { JwtStrategy } from '../auth/stratigies/jwt.strategy'

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtService, JwtStrategy],
  imports: [TypeOrmModule.forFeature([UsersModel]), ConfigModule],
})
export class UsersModule {}
