import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeeService } from '../coffees.service';

@Module({
  imports: [],
  controllers: [CoffeesController],
  providers: [CoffeeService],
})
export class CoffeesModule { }
