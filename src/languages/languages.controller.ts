import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { LanguagesService } from './languages.service';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Get('')
  async getAll() {
    return this.languagesService.getAllLanguage()
  }

  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Post('')
  async create(@Body() language: string) {
    return this.languagesService.create(language)
  }
}
