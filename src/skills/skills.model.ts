import { Base } from '../utils/base'
import { Column, Entity, OneToMany } from 'typeorm'
import { SkillsSelectedModel } from '../skills-selected/skills-selected.model'

@Entity('skills')
export class SkillsModel extends Base {
  @Column()
  name: string

  @OneToMany(() => SkillsSelectedModel, skillsSelected => skillsSelected.skills)
  skillsSelected: SkillsSelectedModel[]
}
