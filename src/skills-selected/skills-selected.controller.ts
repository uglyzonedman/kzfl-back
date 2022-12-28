import { Controller } from '@nestjs/common';
import { SkillsSelectedService } from './skills-selected.service';

@Controller('skills-selected')
export class SkillsSelectedController {
  constructor(private readonly skillsSelectedService: SkillsSelectedService) {}
}
