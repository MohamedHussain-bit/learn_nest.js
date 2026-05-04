import { Controller, Get } from '@nestjs/common';

@Controller()
export class ReviewsController {
  // GET  http://localhost:5000/api/v1/reviews
  @Get('/api/v1/reviews')
  public getAllReviews() {
    return [
      { id: 1, productId: 1, rating: 4, comment: 'Great product!' },
      { id: 2, productId: 1, rating: 5, comment: 'Excellent!' },
      { id: 3, productId: 2, rating: 3, comment: 'Average.' },
    ];
  }
}
