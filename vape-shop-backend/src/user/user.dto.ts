import {
	IsEmail,
	IsOptional,
	IsString,
	MinLength
} from 'class-validator'



export class UserDto  {
	@IsEmail()
	@IsOptional()
	email?: string

	@IsOptional()
	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})
	@IsString()
	password?: string

	@IsString()
	@IsOptional()
	name?: string

	@IsOptional()
	@IsString()
	avatrPath: string

	@IsOptional()
	@IsString()
	phone?:	string
}
