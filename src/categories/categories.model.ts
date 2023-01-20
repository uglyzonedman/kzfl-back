import {
  Entity,
  Tree,
  Column,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
} from "typeorm"

@Entity("categories")
@Tree("materialized-path")
export class CategoriesModel {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @TreeChildren()
  children: CategoriesModel[]

  @TreeParent()
  parent: CategoriesModel
}