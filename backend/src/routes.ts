import {Router} from 'express';

import UsersController from './controllers/UsersController';

const routes = Router();

const usersController = new UsersController();

routes.get('/users', usersController.index);

export default routes;