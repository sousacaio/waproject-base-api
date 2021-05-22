import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from '../services/order';
import { SaveValidator } from '../validators/order/save';

@ApiTags('Admin: Orders')
@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('')
  public async login(@Body() model: SaveValidator) {
    return this.orderService.save(model);
  }
}
