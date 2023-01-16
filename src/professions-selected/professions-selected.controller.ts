import { Controller } from '@nestjs/common';
import { ProfessionsSelectedService } from './professions-selected.service';

@Controller('professions-selected')
export class ProfessionsSelectedController {
  constructor(private readonly professionsSelectedService: ProfessionsSelectedService) {}
}
