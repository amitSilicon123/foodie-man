import { IsString, IsNotEmpty } from 'class-validator';

export class LoginInput {
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: any;
}