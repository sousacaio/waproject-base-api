import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('Orders', table => {
    table.increments('id').primary();
    table
      .integer('userId')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('User')
      .onDelete('CASCADE');
    table.string('name', 50).notNullable();
    table.integer('quantity').nullable();
    table.integer('value').notNullable();
    table.text('description').notNullable();
    table.dateTime('createdDate').defaultTo(knex.fn.now());
    table.dateTime('updatedDate').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('Orders');
}
