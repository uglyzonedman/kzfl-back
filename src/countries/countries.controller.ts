import { Controller, Get } from "@nestjs/common";
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('')
  async getAll() {
    return this.countriesService.getAll()
  }
  @Get('country')
  async getCountry() {
    return this.countriesService.getCountry()
  }
}
