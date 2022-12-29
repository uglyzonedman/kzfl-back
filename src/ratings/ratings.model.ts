import { Base } from "../utils/base";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { GendersModel } from "../genders/genders.model";
import { UsersModel } from "../users/users.model";

@Entity('ratings')
export class RatingsModel extends Base {
  @Column()
  value: number

  @Column()
  message: string

  @ManyToOne(() => UsersModel, users => users.rating_from)
  @JoinColumn({ name: 'owner_id' })
  owners: UsersModel

  @ManyToOne(() => UsersModel, users => users.rating_to)
  @JoinColumn({ name: 'user_id' })
  users: UsersModel
}