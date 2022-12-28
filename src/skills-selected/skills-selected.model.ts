import { Base } from '../utils/base'
import { UsersModel } from '../users/users.model'
import { Entity, ManyToOne } from 'typeorm'
import { SkillsModel } from '../skills/skills.model'

@Entity('skills-selected')
export class SkillsSelectedModel extends Base {
  @ManyToOne(() => UsersModel, users => users.skillsSelected)
  user: UsersModel

  @ManyToOne(() => SkillsModel, skills => skills.skillsSelected)
  skills: SkillsModel
}
