import { IsEmail, IsString, MinLength, isEmail } from "class-validator";

export class AuthDto {
    @IsString()
    name: string
    
    @IsEmail()
    email: string

    @MinLength(6, {message: 'Password must be at least six characters long'})
    @IsString()
    password: string
}