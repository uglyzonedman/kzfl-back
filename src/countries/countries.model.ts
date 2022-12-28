import { Column, Entity, OneToMany } from 'typeorm'
import { Base } from '../utils/base'
import { UsersModel } from '../users/users.model'

@Entity('countries')
export class CountriesModel extends Base {
  @Column()
  name: string

  @OneToMany(() => UsersModel, user => user.countries)
  user: UsersModel[]
}
