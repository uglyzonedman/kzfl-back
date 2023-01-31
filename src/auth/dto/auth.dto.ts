import {IsEmail, MinLength, } from "class-validator";

export class AuthDto {
    @IsEmail()
    email: string

    @MinLength(6)
    password: string

    name: string
    surname: string

    roleId: number
}