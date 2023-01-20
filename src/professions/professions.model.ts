import { Column, Entity, OneToMany, Tree, TreeChildren, TreeParent } from "typeorm";
import { Base } from "../utils/base";
import { ProfessionsSelectedModel } from "./professions-selected.model";

@Entity('professions')
@Tree("materialized-path")
export class ProfessionsModel extends Base {
  @Column({})
  name: string

  @TreeChildren()
  children: ProfessionsModel[]

  @TreeParent()
  parent: ProfessionsModel

  @OneToMany(() => ProfessionsSelectedModel, professionsSelected => professionsSelected.professions)
  professionsSelected: ProfessionsSelectedModel[]
}
