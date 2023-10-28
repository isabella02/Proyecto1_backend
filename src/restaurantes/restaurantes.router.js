import { Router } from 'express';
import {
  createRestaurante,
  deleteRestaurante,
  readRestaurante,
  readRestaurantes,
  updateRestaurante,
} from './restaurantes.controller';

const routerRestaurantes = Router();

//Create
routerRestaurantes.post('/', createRestaurante);
//Read
routerRestaurantes.get('/:id', readRestaurante);
routerRestaurantes.get('/', readRestaurantes);
//Update
routerRestaurantes.patch('/:id', updateRestaurante);
//Delete
routerRestaurantes.delete('/:id', deleteRestaurante);

export default routerRestaurantes;
