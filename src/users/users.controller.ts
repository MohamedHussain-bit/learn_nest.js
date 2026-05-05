import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsersController {
  // GET  http://localhost:5000/api/v1/users
  @Get('/api/v1/users')
  public getAllUsers() {
    return [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
    ];
  }
}
