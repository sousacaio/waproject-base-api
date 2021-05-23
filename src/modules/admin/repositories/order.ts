import { Injectable } from '@nestjs/common';
import { Transaction } from 'knex';
import { IPaginationParams } from 'modules/common/interfaces/pagination';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/orders';
import { Page } from 'objection';

@Injectable()
export class OrderRepository {
  public async list(params: IPaginationParams, transaction?: Transaction): Promise<Page<Order>> {
    let query = Order.query(transaction)
      .select('*')
      .page(params.page, params.pageSize);

    if (params.orderBy) {
      if (params.orderBy !== 'id') {
        query = query.orderBy(params.orderBy, params.orderDirection);
      } else {
        query = query.orderBy('name', params.orderDirection);
      }
    }

    if (params.term) {
      query = query.where(query => {
        return query.where('name', 'ilike', `%${params.term}%`).orWhere('description', 'ilike', `%${params.term}%`);
      });
    }

    return query;
  }
  public async insert(model: IOrder, transaction?: Transaction): Promise<Order> {
    return Order.query(transaction).insert(model);
  }
}
