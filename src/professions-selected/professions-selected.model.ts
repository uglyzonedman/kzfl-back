import { Base } from '../utils/base'
import { UsersModel } from '../users/users.model'
import { Entity, ManyToOne } from 'typeorm'
import { ProfessionsModel } from "../professions/professions.model";

@Entity('profession-selected')
export class ProfessionsSelectedModel extends Base {

  @ManyToOne(() => UsersModel, users => users.professionsSelected,{onDelete: 'CASCADE'})
  user: UsersModel

  @ManyToOne(() => ProfessionsModel, professions => professions.professionsSelected,{onDelete: 'CASCADE'})
  professions: ProfessionsModel
}
