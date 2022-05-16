import { Router } from "express";
import { actualizarUsuario, deleteUsuario, getAllUsers, getUserById, getUserSearch, insertarUsuario } from '../controllers/usuarioController.js';

const routerUsuario = Router();

routerUsuario.get('/user', getAllUsers);
routerUsuario.post('/user', insertarUsuario);
routerUsuario.get('/user/:id', getUserById);
routerUsuario.get('/user/search/:search', getUserSearch);
routerUsuario.put('/user', actualizarUsuario);
routerUsuario.delete('/user/:id', deleteUsuario);


export default routerUsuario