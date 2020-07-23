import {Router} from 'express';

import UsersController from './controllers/UsersController';
import RequestsController from './controllers/RequestsController';

const routes = Router();

const usersController = new UsersController();
const requestsController = new RequestsController();

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.show);
routes.post('/users', usersController.create);

routes.get('/requests', requestsController.index);
routes.get('/requests/:id', requestsController.show);
routes.post('/requests', requestsController.create);

export default routes;