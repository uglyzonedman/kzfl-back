import { Column, Entity, OneToMany } from 'typeorm'
import { Base } from '../utils/base'
import { UsersModel } from '../users/users.model'

@Entity('genders')
export class GendersModel extends Base {
  @Column()
  name: string

  @OneToMany(() => UsersModel, user => user.genders,{onDelete: 'CASCADE'})
  user: UsersModel[]
}
