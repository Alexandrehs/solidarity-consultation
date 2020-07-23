import {Request, Response} from 'express';
import knex from '../database/connection';

class UserRequestController {
  async show(request: Request, response: Response) {
    const idUser = request.params;

    if(idUser) {
      const requestByUser = 
        await knex('requests')
        .select('*')
        .where('id_user', '=', idUser);

      if(requestByUser) {
        return response.json(requestByUser);
      }  
    }
  }
}