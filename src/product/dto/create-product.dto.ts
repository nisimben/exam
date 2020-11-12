import { IsString, IsNumber } from 'class-validator';

export class CreateProductDTO {
    @IsString()
    name:string
    @IsString()
    price:string
    @IsString()
    description:string

}
