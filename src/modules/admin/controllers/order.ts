import { Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Order } from 'modules/database/models/orders';
import { OrderRepository } from '../repositories/order';
import { OrderService } from '../services/order';
import { ListValidator } from '../validators/order/list';
import { SaveValidator } from '../validators/order/save';

@ApiTags('Admin: Orders')
@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService, private readonly orderRepository: OrderRepository) {}

  @Post('')
  public async create(@Body() model: SaveValidator) {
    return this.orderService.save(model);
  }

  @Get('')
  @ApiResponse({ status: 200, type: [Order] })
  public async list(@Query() model: ListValidator) {
    return this.orderRepository.list(model);
  }
}
