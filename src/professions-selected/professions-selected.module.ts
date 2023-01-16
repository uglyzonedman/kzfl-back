import { Module } from '@nestjs/common';
import { ProfessionsSelectedService } from './professions-selected.service';
import { ProfessionsSelectedController } from './professions-selected.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SkillsSelectedModel } from "../skills-selected/skills-selected.model";
import { ConfigModule } from "@nestjs/config";
import { ProfessionsSelectedModel } from "./professions-selected.model";

@Module({
  controllers: [ProfessionsSelectedController],
  providers: [ProfessionsSelectedService],
  imports: [TypeOrmModule.forFeature([ProfessionsSelectedModel]), ConfigModule],
})
export class ProfessionsSelectedModule {}
