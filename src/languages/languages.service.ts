import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LanguagesModel } from "./languages.model";
import { Repository } from "typeorm";

@Injectable()
export class LanguagesService {
  constructor(@InjectRepository(LanguagesModel) private readonly languagesModel: Repository<LanguagesModel>) {
  }
  async getAllLanguage() {
    return await this.languagesModel.find()
  }

  async create(language: any) {
    const checkOldLanguage = await this.languagesModel.findOne({where: {name: language}})

    if (checkOldLanguage) throw new BadRequestException('Такой язык уже существует')

    const newLanguage = this.languagesModel.create(language)

    return await this.languagesModel.save(newLanguage)
  }
}
