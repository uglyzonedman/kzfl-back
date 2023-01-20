import { Column, Entity, OneToMany, Tree, TreeChildren, TreeParent } from "typeorm";
import { Base } from '../utils/base'
import { UsersModel } from '../users/users.model'

@Entity('countries')
@Tree("materialized-path")
export class CountriesModel extends Base {
  @Column()
  name: string

  @TreeChildren()
  children: CountriesModel[]

  @TreeParent()
  parent: CountriesModel

  @Column({default: 'files/noup.gif'})
  flag: string

  @OneToMany(() => UsersModel, user => user.countries,{onDelete: 'CASCADE'})
  user_country: UsersModel[]

  @OneToMany(() => UsersModel, user => user.city,{onDelete: 'CASCADE'})
  user_city: UsersModel[]
}
