import {Request, Response} from 'express';
import knex from '../database/connection';

class UsersController {
  async index(request: Request, response: Response) {
    return response.json({mss: 'Todos os abestadus listados aqui!'});
  }

  async show(request: Request, response: Response) {
    const idUser = request.params;

    const userRequest = await knex('users').select('*');

    if(userRequest) {
      return response.json(userRequest);
    }
  }

  async create(request: Request, response: Response) {
    const requestDataNewUser = request.body;

    const idNewUser = await knex('users').insert(requestDataNewUser);

    return response.json({id: idNewUser, requestDataNewUser});
  }
}

export default UsersController;