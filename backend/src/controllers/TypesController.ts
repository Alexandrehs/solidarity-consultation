import {Request, Response} from 'express';
import knex from '../database/connection';

class TypesController {
  async index(request: Request, response: Response) {
    const allTypes = await knex('types').select('*');

    if(allTypes) { 
      return response.json(allTypes);
    }
  }

  async create(request: Request, response: Response) {
    const newType = request.body;

    if(newType) {
      const idNewType = await knex('types').insert(newType);

      if(idNewType) {
        return response.json({
          id: idNewType,
          data: newType
        });
      }
    }
  }
}

export default TypesController;