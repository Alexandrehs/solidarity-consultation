import {Router} from 'express';

import UsersController from './controllers/UsersController';
import RequestsController from './controllers/RequestsController';
import TypesController from './controllers/TypesController';
import UserRequestController from './controllers/UserRequestController';

const routes = Router();

const usersController = new UsersController();
const requestsController = new RequestsController();
const typesController = new TypesController();
const userRequestController = new UserRequestController();

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.show);
routes.post('/users', usersController.create);
routes.get('/users/request/:id', userRequestController.show);

routes.get('/requests', requestsController.index);
routes.get('/requests/:id', requestsController.show);
routes.post('/requests', requestsController.create);

routes.get('/types', typesController.index);
routes.post('/types', typesController.create);

export default routes;