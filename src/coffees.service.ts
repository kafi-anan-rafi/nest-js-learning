import { Injectable } from '@nestjs/common';
import { Coffee } from './coffees/entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [{
    id: 1,
    name: "Rost",
    brand: 'Buddy Brew',
    flavors: ['chocolate', 'vanilla']
  }];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find(item => item.id === +id)
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      existingCoffee.id = updateCoffeeDto.id;
      existingCoffee.brand = updateCoffeeDto.brand;
      existingCoffee.flavors = updateCoffeeDto.flavors;
      existingCoffee.name = updateCoffeeDto.name;
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
