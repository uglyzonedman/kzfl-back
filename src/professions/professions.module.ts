import { Module } from '@nestjs/common';
import { ProfessionsService } from './professions.service';
import { ProfessionsController } from './professions.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfessionsSelectedModel } from "./professions-selected.model";
import { ConfigModule } from "@nestjs/config";
import { ProfessionsModel } from "./professions.model";

@Module({
  controllers: [ProfessionsController],
  providers: [ProfessionsService],
  imports: [TypeOrmModule.forFeature([ProfessionsModel, ProfessionsSelectedModel]), ConfigModule],
})
export class ProfessionsModule {}
