import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersModel } from '../users/users.model'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AuthDto } from './dto/auth.dto'
import { RefreshTokenDto } from './dto/refreshToken.dto'
import { JwtService } from '@nestjs/jwt'
import { genSalt, hash, compare } from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersModel)
    private readonly usersModel: Repository<UsersModel>,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: AuthDto) {
    const oldUser = await this.usersModel.findOneBy({ email: dto.email })
    if (oldUser) {
      throw new BadRequestException('Пользователь с такой почтой уже существует')
    }

    const salt = await genSalt(10)

    const newUser = await this.usersModel.create({
      email: dto.email,
      password: await hash(dto.password, salt),
      name: dto.name,
      surname: dto.surname,
      roles: { id: 1 },
    })
    const tokens = await this.createToken(newUser)

    const user = await this.usersModel.save(newUser)

    return {
      user: this.returnUserFields(user),
      ...tokens,
    }
  }

  async login(dto: AuthDto) {
    const user = await this.usersModel.findOne({
      where: {
        email: dto.email,
      },
      relations: { roles: true },
    })

    if (!user) {
      throw new BadRequestException('Такого пользователя не существует ')
    }

    const checkUser = await compare(dto.password, user.password)

    if (!checkUser) throw new UnauthorizedException('Пароль неверный')

    const tokens = await this.createToken(user)

    return {
      user: this.returnUserFields(user),
      ...tokens,
    }
  }

  async getNewTokens({ refreshToken }: RefreshTokenDto) {
    if (!refreshToken) throw new UnauthorizedException('Please sign in!')

    const result = await this.jwtService.verifyAsync(refreshToken)

    if (!result) throw new UnauthorizedException('Invalid token or expired!')

    const user = await this.usersModel.findOneBy(result.id)

    const tokens = await this.createToken(user)

    return {
      user: this.returnUserFields(user),
      ...tokens,
    }
  }

  async createToken(user: UsersModel) {
    const data = { id: user.id, email: user.email, roles: user.roles }
    const refreshToken = await this.jwtService.signAsync(data, {
      expiresIn: '15d',
    })

    const accessToken = await this.jwtService.signAsync(data, {
      expiresIn: '24h',
    })
    return { refreshToken, accessToken }
  }

  returnUserFields(user: UsersModel) {
    return {
      id: user.id,
      email: user.email,
      roles: user.roles,
    }
  }
}
