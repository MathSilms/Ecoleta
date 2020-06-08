import express, { json } from 'express';
import PointsControllers from './controller/PointsController';
import ItemsController from './controller/ItemsController';

const routes = express.Router();


routes.get('/items', ItemsController.index);

routes.post('/points', PointsControllers.create);
routes.get('/points/:id', PointsControllers.show);
routes.get('/points', PointsControllers.index);

export default routes;