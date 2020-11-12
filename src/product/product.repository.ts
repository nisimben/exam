import { Repository, EntityRepository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    public async createProduct(
        createProductDto: CreateProductDTO,
    ): Promise<Product> {
        const { name, description, price } = createProductDto;
        const product = new Product();
        product.name = name;
        product.description = description;
        product.price = price;
        
        await product.save();
        return product;
    }

    public async editProduct(
        createProductDto: CreateProductDTO,
        editedProduct: Product,
    ): Promise<Product> {
        const {name,price,description } = createProductDto;
        editedProduct =new Product()
        editedProduct.name =name
        editedProduct.price =price
        editedProduct.description =description

        await editedProduct.save();

        return editedProduct;
    }
}
