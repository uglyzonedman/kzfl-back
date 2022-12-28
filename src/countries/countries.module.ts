import { Module } from '@nestjs/common'
import { CountriesService } from './countries.service'
import { CountriesController } from './countries.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CountriesModel } from './countries.model'
import { ConfigModule } from '@nestjs/config'

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  imports: [TypeOrmModule.forFeature([CountriesModel]), ConfigModule],
})
export class CountriesModule {}
