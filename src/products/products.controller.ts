import { Controller, Get, Post, Body } from '@nestjs/common';

type ProductType = {
  id: number;
  name: string;
  price: number;
};

@Controller()
export class ProductController {
  private products: ProductType[] = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
  ];
  // POST  http://localhost:5000/api/v1/products
  @Post('/api/v1/products')
  public createProduct(@Body() body: any) {
    console.log(body);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return body;
  }
  // GET  http://localhost:5000/api/v1/products
  @Get('/api/v1/products')
  public getAllProducts() {
    return this.products;
  }
}
