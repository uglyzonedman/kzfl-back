import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Strategy, ExtractJwt } from 'passport-jwt'

import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { UsersModel } from '../../users/users.model'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersModel)
    private readonly userModel: Repository<UsersModel>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'ersfdfsdfsd454%',
    })
  }
  async validate({ id }: Pick<UsersModel, 'id'>) {
    return this.userModel.findBy({ id })
  }
}
