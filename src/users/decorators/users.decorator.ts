import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UsersModel } from '../users.model'

type TypeData = keyof UsersModel

export const User = createParamDecorator((data: TypeData, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  const user = request.user

  return data ? user[data] : user
})

export const EblanUser = createParamDecorator((data: TypeData, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  const user = request.user

  return data[user]
})
