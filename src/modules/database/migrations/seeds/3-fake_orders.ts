import * as faker from 'faker/locale/pt_BR';
import * as Knex from 'knex';
import { IOrder } from 'modules/database/interfaces/order';
import { IS_DEV } from 'settings';

export async function seed(knex: Knex): Promise<void> {
  if (!IS_DEV) return;

  for (let x = 0; x < 100; x++) {
    const name = faker.commerce.product();
    const description = faker.commerce.productAdjective();
    const value = faker.random.number();
    const quantity = faker.random.number();

    const order: IOrder = {
      name,
      userId: 1,
      description,
      value,
      quantity
    };

    await knex.insert(order).into('Orders');
  }
}
