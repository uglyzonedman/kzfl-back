import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { RatingsModel } from "./ratings.model";
import { ConfigModule } from "@nestjs/config";
import { UsersModel } from "../users/users.model";
import { JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "../auth/stratigies/jwt.strategy";
import { UsersService } from "../users/users.service";

@Module({
  controllers: [RatingsController],
  providers: [RatingsService,JwtService, JwtStrategy,UsersService],
  imports: [TypeOrmModule.forFeature([RatingsModel,UsersModel]), ConfigModule]
})
export class RatingsModule {}
