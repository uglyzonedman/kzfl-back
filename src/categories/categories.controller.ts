import { Controller, Get, HttpCode, UsePipes, ValidationPipe } from "@nestjs/common";
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Get('all')
  async getAll() {
    return this.categoriesService.getAll()
}
}
