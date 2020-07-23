import {Request, Response} from 'express';
import knex from '../database/connection';

class TypesController {
  async index(request: Request, response: Response) {
    const allTypes = await knex('types').select('*');

    if(allTypes) {
      return response.json(allTypes);
    }
  }
}