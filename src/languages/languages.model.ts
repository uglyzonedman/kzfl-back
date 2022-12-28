import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { Base } from '../utils/base'
import { UsersModel } from '../users/users.model'

@Entity('languages')
export class LanguagesModel extends Base {
  @Column()
  name: string

  @OneToMany(() => UsersModel, user => user.languages)
  user: UsersModel[]
}
