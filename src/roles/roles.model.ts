import { Column, Entity, OneToMany } from 'typeorm'
import { Base } from '../utils/base'
import { UsersModel } from '../users/users.model'

@Entity('roles')
export class RolesModel extends Base {
  @Column({})
  name: string

  @OneToMany(() => UsersModel, user => user.roles)
  user: UsersModel[]
}
