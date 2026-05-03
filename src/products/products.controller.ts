import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProductController {
  // GET  http://localhost:3000/api/v1/products
  @Get('/api/v1/products')
  public getAllProducts() {
    return [
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 19.99 },
      { id: 3, name: 'Product 3', price: 5.99 },
    ];
  }
}
