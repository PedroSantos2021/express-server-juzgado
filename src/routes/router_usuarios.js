import { Router } from "express";
import { getAllUsers, insertarUsuario } from '../controllers/usuarioController.js';

const routerUsuario = Router();

routerUsuario.get('/user', getAllUsers);
routerUsuario.post('/user', insertarUsuario)


export default routerUsuario