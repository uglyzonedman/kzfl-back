import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UsersModel } from './users.model'
import { Repository } from 'typeorm'
import { UsersDto } from './dto/users.dto'
import { genSalt, hash } from 'bcryptjs'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UsersModel) private readonly usersModel: Repository<UsersModel>) {}

  async getAll() {
    return await this.usersModel.find({relations: {rating_to: true}})
  }

  async getById(id: number) {
    const user = await this.usersModel.findOne({
      where: { id },
      relations: {
        countries: true,
        roles: true,
        genders: true,
        languages: true,
        skillsSelected: { skills: true },
      },
    })

    if (!user) throw new BadRequestException('Пользователь не найден')

    return user
  }

  async updateProfile(id: number, dto: UsersDto) {
    const user = await this.getById(id)
    const salt = await genSalt(10)
    const isSameUser = await this.usersModel.findOne({
      where: {
        email: dto.email,
      },
    })

    if (isSameUser && id !== isSameUser.id) throw new NotFoundException('Почта занята')

    if (dto.password) {
      user.password = await hash(dto.password, salt)
    }
    user.email = dto.email
    user.name = dto.name
    user.surname = dto.surname
    user.genders = dto.genders
    user.languages = dto.languages
    user.countries = dto.countries
    await this.usersModel.save(user)
    return
  }


}
