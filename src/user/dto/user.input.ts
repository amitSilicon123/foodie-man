import {IsString, IsEmail, IsNotEmpty, Length} from 'class-validator';
export class UserInput {
    @IsString()
    @IsNotEmpty({message: "Name is required"})
    name: string;

    @IsEmail()
    @IsNotEmpty({message: "email is required"})
    email: string;

    @IsString()
    @IsNotEmpty({message: "Phone is required"})
    phone: string;

    @IsString()
    @IsNotEmpty({message: "Password is required"})
    password: string;

    @IsString()
    @IsNotEmpty({message: "Role is required"})
    role: string;
}
