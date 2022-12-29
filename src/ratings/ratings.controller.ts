import { Body, Controller, HttpCode, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { RatingsService } from './ratings.service';
import { JwtAuthGuard } from "../auth/guards/jwt.guard";
import { User } from "../users/decorators/users.decorator";
import { RatingsDto } from "./dto/ratings.dto";

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('set-rating')
  @UseGuards(JwtAuthGuard)
  async setRating(@User('id') id: number, @Body() dto: RatingsDto) {
    return this.ratingsService.setRating(id,dto)
  }
}
