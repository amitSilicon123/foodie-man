import { IsString, IsUrl, IsOptional, ValidateIf  } from "class-validator";
export class CreateCategoryDto {
    @IsString()
    name:string;

    @IsOptional() // allows undefined
    iconUrl?: string;
    
    @IsOptional() // allows undefined
    slug?: string;

}

/*export class RespoonseCategoryDto{

}

export class UpdateCategoryDto {

}*/
