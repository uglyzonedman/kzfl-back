import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "../utils/base";
import { ProfessionsSelectedModule } from "../professions-selected/professions-selected.module";
import { ProfessionsSelectedModel } from "../professions-selected/professions-selected.model";

@Entity('professions')
export class ProfessionsModel extends Base {
  @Column({})
  name: string

  @OneToMany(() => ProfessionsSelectedModel, professionsSelected => professionsSelected.professions)
  professionsSelected: ProfessionsSelectedModule[]
}
