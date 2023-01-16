import { Base } from '../utils/base'
import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { RolesModel } from '../roles/roles.model'
import { SkillsSelectedModel } from '../skills-selected/skills-selected.model'
import { GendersModel } from '../genders/genders.model'
import { LanguagesModel } from '../languages/languages.model'
import { CountriesModel } from '../countries/countries.model'
import { OrdersModel } from '../orders/orders.model'
import { RatingsModel } from "../ratings/ratings.model";
import { ProfessionsSelectedModel } from "../professions-selected/professions-selected.model";

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

  @Column({default: 0})
  phone: number

  @Column({default: false})
  isVery: boolean

  @ManyToOne(() => RolesModel, roles => roles.user)
  @JoinColumn({ name: 'role_id' })
  roles: RolesModel

  @ManyToOne(() => GendersModel, genders => genders.user)
  @JoinColumn({ name: 'gender_id' })
  genders: GendersModel

  @OneToMany(() => RatingsModel, rating => rating.owners)
  rating_from: RatingsModel[]

  @OneToMany(() => RatingsModel, rating => rating.users)
  rating_to: RatingsModel[]

  @OneToMany(() => SkillsSelectedModel, skillsSelected => skillsSelected.skills)
  skillsSelected: SkillsSelectedModel[]

  @OneToMany(() => ProfessionsSelectedModel, professionsSelected => professionsSelected.professions)
  professionsSelected: ProfessionsSelectedModel[]

  @ManyToOne(() => LanguagesModel, languages => languages.user)
  @JoinColumn({ name: 'language_id' })
  languages: LanguagesModel

  @ManyToOne(() => CountriesModel, countries => countries.user)
  @JoinColumn({ name: 'country_id' })
  countries: CountriesModel

  @OneToMany(() => OrdersModel, orders => orders.users)
  orders: OrdersModel[]

  @Column({default: 4})
  rating: number
}
