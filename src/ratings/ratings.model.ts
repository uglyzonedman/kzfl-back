import { Base } from "../utils/base";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { GendersModel } from "../genders/genders.model";
import { UsersModel } from "../users/users.model";

@Entity('ratings')
export class RatingsModel extends Base {
  @Column({default: 4.0})
  value: number

  @Column({default: ""})
  message: string

  @Column({default: ""})
  plus : string

  @Column({default: ""})
  minus: string

  @ManyToOne(() => UsersModel, users => users.rating_from,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'owner_id' })
  owners: UsersModel

  @ManyToOne(() => UsersModel, users => users.rating_to,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'user_id' })
  users: UsersModel
}