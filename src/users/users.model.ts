import { Base } from '../utils/base'
import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { RolesModel } from '../roles/roles.model'
import { SkillsSelectedModel } from '../skills-selected/skills-selected.model'
import { GendersModel } from '../genders/genders.model'
import { LanguagesModel } from '../languages/languages.model'
import { CountriesModel } from '../countries/countries.model'
import { OrdersModel } from '../orders/orders.model'
import { RatingsModel } from "../ratings/ratings.model";
import { ProfessionsSelectedModel } from "../professions/professions-selected.model";
import { OrdersResponseModel } from 'src/orders-response/orders-response.model'


@Entity('users')
export class UsersModel extends Base {
  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: '' })
  name: string

  @Column({ default: '' })
  login: string

  @Column({ default: '' })
  surname: string

  @Column({ default: 0 })
  phone: number

  @Column({ default: false })
  isVery: boolean

  @Column({ default: `${'files/user.png'}` })
  avatarPath: string



  @Column({ default: '' })
  about: string

  @ManyToOne(() => RolesModel, roles => roles.user, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'role_id' })
  roles: RolesModel

  @ManyToOne(() => GendersModel, genders => genders.user, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'gender_id' })
  genders: GendersModel

  @OneToMany(() => RatingsModel, rating => rating.owners, { onDelete: 'CASCADE' })
  rating_from: RatingsModel[]

  @OneToMany(() => RatingsModel, rating => rating.users, { onDelete: 'CASCADE' })
  rating_to: RatingsModel[]

  @OneToMany(() => SkillsSelectedModel, skillsSelected => skillsSelected.skills, { onDelete: 'CASCADE' })
  skillsSelected: SkillsSelectedModel[]

  @OneToMany(() => ProfessionsSelectedModel, professionsSelected => professionsSelected.user, { onDelete: 'CASCADE' })
  professionsSelected: ProfessionsSelectedModel[]

  @ManyToOne(() => LanguagesModel, languages => languages.user, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'language_id' })
  languages: LanguagesModel

  @ManyToOne(() => CountriesModel, countries => countries.user_country, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'country_id' })
  countries: CountriesModel

  @ManyToOne(() => CountriesModel, city => city.user_city, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'city_id' })
  city: CountriesModel

  @OneToMany(() => OrdersModel, orders => orders.users, { onDelete: 'CASCADE' })
  orders: OrdersModel[]

  @OneToMany(() => OrdersResponseModel, ordersResponse => ordersResponse.owner)
  ordersResponse: OrdersResponseModel[]

  @Column({ default: 4 })
  rating: number

  @Column({ default: 0 })
  view: number

  @Column({ default: '' })
  title: string

}
