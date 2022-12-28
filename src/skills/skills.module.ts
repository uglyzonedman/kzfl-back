import { Module } from '@nestjs/common'
import { SkillsService } from './skills.service'
import { SkillsController } from './skills.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModel } from '../users/users.model'
import { ConfigModule } from '@nestjs/config'
import { SkillsModel } from './skills.model'

@Module({
  controllers: [SkillsController],
  providers: [SkillsService],
  imports: [TypeOrmModule.forFeature([SkillsModel]), ConfigModule],
})
export class SkillsModule {}
