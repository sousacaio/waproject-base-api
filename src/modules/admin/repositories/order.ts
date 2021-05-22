import { Injectable } from '@nestjs/common';
import { Transaction } from 'knex';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/orders';

@Injectable()
export class OrderRepository {
  public async insert(model: IOrder, transaction?: Transaction): Promise<Order> {
    return Order.query(transaction).insert(model);
  }
}
