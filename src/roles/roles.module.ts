import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolesModel} from "./roles.model";
import {ConfigModule} from "@nestjs/config";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [TypeOrmModule.forFeature([RolesModel]), ConfigModule],
})
export class RolesModule {}
