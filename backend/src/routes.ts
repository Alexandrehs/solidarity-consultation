import {Router} from 'express';

import UsersController from './controllers/UsersController';
import RequestsController from './controllers/RequestsController';
import TypesController from './controllers/TypesControlle';

const routes = Router();

const usersController = new UsersController();
const requestsController = new RequestsController();
const typesController = new TypesController();

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.show);
routes.post('/users', usersController.create);

routes.get('/requests', requestsController.index);
routes.get('/requests/:id', requestsController.show);
routes.post('/requests', requestsController.create);

routes.get('/types', typesController.index);
routes.post('/types', typesController.create);


export default routes;