import { Controller, Get, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { identity } from 'rxjs';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}
    @Get('all')
    public async getProducts(): Promise<Product[]> {
        const products = await this.productService.getProducts();
        if (!products) {
            
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
            }, HttpStatus.FORBIDDEN);
        }
        return products;
     
    }
    @Get(':id')
    public async getProduct(@Param('id')id):Promise<Product>{
        return this.productService.getProduct(id)
    }
    @Patch(':id/:product')
    public async editProduct(@Param('id')id,@Param('product')createProductDto:CreateProductDTO):Promise<Product>{
        return this.productService.editProduct(id,createProductDto)
    }

}
