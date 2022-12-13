import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  [x: string]: string;
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}