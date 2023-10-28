import { Router } from 'express';
import {
  createUsuario,
  deleteUsuario,
  readUserByMailAndPassword,
  readUsuario,
  updateUsuario,
} from './usuarios.controller';

const routerUsuarios = Router();

//Create
routerUsuarios.post('/', createUsuario);
//Read
routerUsuarios.get('/:id', readUsuario);
routerUsuarios.get('/:mail/:password', readUserByMailAndPassword);
//Update
routerUsuarios.patch('/:id', updateUsuario);
//Delete
routerUsuarios.delete('/:id', deleteUsuario);

export default routerUsuarios;
