import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModel } from './users.model'
import { ConfigModule } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { JwtStrategy } from '../auth/stratigies/jwt.strategy'
import { RatingsModel } from "../ratings/ratings.model";
import { RatingsService } from "../ratings/ratings.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtService, JwtStrategy,RatingsService],
  imports: [TypeOrmModule.forFeature([UsersModel,RatingsModel]), ConfigModule],
})
export class UsersModule {}
