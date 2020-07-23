import Knex from 'knex';
import path from 'path';

export async function up(knex: Knex) {
  return knex.schema.createTable('types', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('types');
}