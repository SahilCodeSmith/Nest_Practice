import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  get findAll(): string {
    return 'This action returns all coffees';
  }
}
