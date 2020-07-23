import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('location').notNullable();
    table.string('indetification').defaultTo('patient');
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('users');
}