import { Router } from 'express';
import {
  createProducto,
  deleteProducto,
  readProducto,
  readProductos,
  updateProducto,
} from './productos.controller';

const routerProductos = Router();

//Create
routerProductos.post('/', createProducto);
//Read
routerProductos.get('/:id', readProducto);
routerProductos.get('/', readProductos);
//Update
routerProductos.patch('/:id', updateProducto);
//Delete
routerProductos.delete('/:id', deleteProducto);

export default routerProductos;
