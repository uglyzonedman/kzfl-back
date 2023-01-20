import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { RatingsModel } from "../ratings/ratings.model";
import { Repository } from "typeorm";
import { CategoriesModel } from "./categories.model";

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(CategoriesModel) private readonly categoriesModel: Repository<CategoriesModel>) {
  }

  async getAll() {
    return await this.categoriesModel.manager.getTreeRepository(CategoriesModel).findTrees()
  }
}
