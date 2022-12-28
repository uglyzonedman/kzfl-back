import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const getJWTConfig = async (configService: ConfigService): Promise<JwtModuleOptions> => ({
  secret: 'ersfdfsdfsd454%',
})
