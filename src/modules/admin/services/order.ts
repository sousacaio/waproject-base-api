import { Injectable, NotFoundException } from '@nestjs/common';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/orders';
import { OrderRepository } from '../repositories/order';
import { UserRepository } from '../repositories/user';

@Injectable()
export class OrderService {
  constructor(private userRepository: UserRepository, private orderRepository: OrderRepository) {}

  public async save(model: IOrder): Promise<Order> {
    let isValidUser = await this.userRepository.findById(model.userId);

    if (!isValidUser) throw new NotFoundException('invalid user');

    return this.orderRepository.insert(model);
  }
}
