import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesModel } from "./categories.model";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [TypeOrmModule.forFeature([CategoriesModel]),ConfigModule]
})
export class CategoriesModule {}
