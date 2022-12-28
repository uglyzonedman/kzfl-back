import { Base } from '../utils/base'
import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { RolesModel } from '../roles/roles.model'
import { SkillsSelectedModel } from '../skills-selected/skills-selected.model'
import { GendersModel } from '../genders/genders.model'
import { LanguagesModel } from '../languages/languages.model'
import { CountriesModel } from '../countries/countries.model'
import { OrdersModel } from '../orders/orders.model'

@Entity('users')
export class UsersModel extends Base {
  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: '' })
  name: string

  @Column({ default: '' })
  surname: string

  @ManyToOne(() => RolesModel, roles => roles.user)
  @JoinColumn({ name: 'role_id' })
  roles: RolesModel

  @ManyToOne(() => GendersModel, genders => genders.user)
  @JoinColumn({ name: 'gender_id' })
  genders: GendersModel

  @OneToMany(() => SkillsSelectedModel, skillsSelected => skillsSelected.skills)
  skillsSelected: SkillsSelectedModel[]

  @ManyToOne(() => LanguagesModel, languages => languages.user)
  @JoinColumn({ name: 'language_id' })
  languages: LanguagesModel

  @ManyToOne(() => CountriesModel, countries => countries.user)
  @JoinColumn({ name: 'country_id' })
  countries: CountriesModel

  @OneToMany(() => OrdersModel, orders => orders.users)
  orders: OrdersModel[]
}
