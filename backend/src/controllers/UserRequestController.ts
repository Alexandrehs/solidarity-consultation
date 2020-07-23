import {Request, Response} from 'express';
import knex from '../database/connection';

class UserRequestController {
  async show(request: Request, response: Response) {
    const idUser = request.params.id;

    if(idUser) {
      const requestByUser = 
        await knex('requests')
        .where({
          id_user: idUser
        })
        .select('*');

    return response.json(requestByUser);
    }
  }
}

export default UserRequestController;