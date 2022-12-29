import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UsersModel } from "../users/users.model";
import { Repository } from "typeorm";
import { RatingsModel } from "./ratings.model";
import { RatingsDto } from "./dto/ratings.dto";
import { UsersService } from "../users/users.service";

@Injectable()
export class RatingsService {
  constructor(@InjectRepository(RatingsModel) private readonly ratingsModel: Repository<RatingsModel>,
              @InjectRepository(UsersModel) private readonly usersModel: Repository<UsersModel>
) {}

  async getUserRatingValue(ownerId: number, userId: number) {
    return this.ratingsModel.findOne({where: {users: {id: userId}, owners: {id: ownerId}}})
  }

  async avgRating(userId: number) {
  const ratingsUser = await  this.ratingsModel.find({where: {users : {id: userId}}})

    return ratingsUser.reduce((acc,item) => acc + item.value, 0 ) / ratingsUser.length
  }

  async setRating(ownerId: number, dto: RatingsDto) {
    const {userId, value, message} = dto

    const newRating = await  this.ratingsModel.create({
      owners: {id: ownerId},
      message,
      value,
      users: {id: userId}
    })

    // const result = await this.ratingsModel
    //   .createQueryBuilder('ratings')
    //   .select('AVG(ratings.value)', 'averageSalary')
    //   .getRawOne();

    const avgRating = await this.avgRating(userId)

    await this.updateRating(userId,newRating.value)

    return await this.ratingsModel.save(newRating)

  }

  async updateRating(id:number,newRating:number) {
    const user = await this.usersModel.findOne({where: {id}})

    user.rating = newRating

    return await this.usersModel.save(user)

  }
}
