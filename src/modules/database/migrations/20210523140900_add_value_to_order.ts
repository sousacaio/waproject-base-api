import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  knex.schema.table('Orders', function(table) {
    table.integer('value');
  });
}

export async function down(knex: Knex): Promise<any> {
  knex.schema.table('Orders', function(table) {
    table.dropColumn('value');
  });
}
