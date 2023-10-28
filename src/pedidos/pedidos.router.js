import { Router } from 'express';
import {
  createPedido,
  deletePedido,
  readPedido,
  readPedidos,
  updatePedido,
} from './pedidos.controller';

const routerPedidos = Router();

//Create
routerPedidos.post('/', createPedido);
//Read
routerPedidos.get('/:id', readPedido);
routerPedidos.get('/', readPedidos);
routerPedidos.get('/enviado', readPedidos);

//Update
routerPedidos.patch('/:id', updatePedido);
//Delete
routerPedidos.delete('/:id', deletePedido);

export default routerPedidos;
