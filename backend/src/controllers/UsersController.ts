import {Request, Response} from 'express';
import knex from '../database/connection';

class UsersController {
  async index(request: Request, response: Response) {
    return response.json({mss: 'Todos os abestadus listados aqui!'});
  }
}

export default UsersController;