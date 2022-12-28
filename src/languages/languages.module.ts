import { Module } from '@nestjs/common'
import { LanguagesService } from './languages.service'
import { LanguagesController } from './languages.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LanguagesModel } from './languages.model'
import { ConfigModule } from '@nestjs/config'

@Module({
  controllers: [LanguagesController],
  providers: [LanguagesService],
  imports: [TypeOrmModule.forFeature([LanguagesModel]), ConfigModule],
})
export class LanguagesModule {}
