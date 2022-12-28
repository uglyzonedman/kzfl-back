import { Module } from '@nestjs/common'
import { SkillsSelectedService } from './skills-selected.service'
import { SkillsSelectedController } from './skills-selected.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { SkillsSelectedModel } from './skills-selected.model'

@Module({
  controllers: [SkillsSelectedController],
  providers: [SkillsSelectedService],
  imports: [TypeOrmModule.forFeature([SkillsSelectedModel]), ConfigModule],
})
export class SkillsSelectedModule {}
