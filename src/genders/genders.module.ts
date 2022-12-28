import { Module } from '@nestjs/common'
import { GendersService } from './genders.service'
import { GendersController } from './genders.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GendersModel } from './genders.model'
import { ConfigModule } from '@nestjs/config'

@Module({
  controllers: [GendersController],
  providers: [GendersService],
  imports: [TypeOrmModule.forFeature([GendersModel]), ConfigModule],
})
export class GendersModule {}
