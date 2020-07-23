import {Request, Response} from 'express';
import knex from '../database/connection';

class RequestsController {
  async index(request: Request, response: Response) {
    const allRequest = await knex('requests').select('*');

    if(allRequest) {
      return response.json(allRequest);
    }
  }

  async show(request: Request, response: Response) {
    const idRequest = request.params;

    if(idRequest) {
      const request = 
        await knex('requests')
        .select('*')
        .where('id', '=',idRequest);

      if(request) {
        return response.json(request);
      }
    }
  }

  async create(request: Request, response: Response) {
    const newRequestData = request.body;
    
    if(newRequestData) {
      const idNewRequest = await knex('requests').insert(newRequestData);

      if(idNewRequest) {
        return response.json({
          id: idNewRequest,
          data: newRequestData
        })
      }
    }
  }
}

export default RequestsController;