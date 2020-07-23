import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('requests', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('date').notNullable();
    table.string('id_user').notNullable();
    table.string('type').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('request');
}