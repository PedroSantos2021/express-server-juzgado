import { ObjectId } from "mongodb";
import response from "../../helpers/responses.js";
import { db } from "../db/connect_db.js";



const collection = db.collection('usuarios')
collection.createIndex({nombres: "text", apellidos: "text"})


const getAllUsers = async (req, res)=> {
    try {
        const options = {
            sort: {apellidos: 1},
            projection: {password: 0}
        }
        const allUsers = await collection.find("",options);
        const result = await allUsers.toArray();

        res.status(200).json(response(200, result));
    } catch (error) {
        res.status(500).json(response(500,error))
    }
}

const getUserById = async (req, res)=> {
    try {
        const id = req.params.id;
        const options = {
            sort: {apellidos: -1},
            projection: {password: 0}
        }
        const user = await collection.findOne({_id : ObjectId(id)}, options);
        if (user == null){
            res.status(200).json(response(204, user));
        }
        res.status(200).json(response(200, user));
    } catch (error) {
        res.status(500).json(response(500, error));
    }
}

const getUserSearch = async (req, res)=> {
    try {
        const search = req.params.search;
        console.log(search)
        const options = {
            sort: {apellidos: 1},
            projection: {password: 0}
        }
        const user = await collection.find({
            $text: { $search: String(search) }
         }, options);
        const result = await user.toArray();
        res.status(200).json(response(200, result));
    } catch (error) {
        res.status(500).json(response(500, error));
    }
}


const insertarUsuario = async (req, res) => {
    try {
        const usuario = req.body
        const result = await collection.insertOne(usuario);
        res.status(201).json(response(201, result));
    } catch (error) {
        res.status(500).json(response(500, error));
    }
}

const actualizarUsuario = async (req, res) => {
    try {
        const usuario = req.body
        const filter = {_id: ObjectId(usuario._id)}
        const usuarioUpdate = {
            $set: {
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                correo: usuario.correo,
                permisos: usuario.permisos,
            }
        }
        const result = await collection.updateOne(filter, usuarioUpdate);
        res.status(200).json(response(202, result));
    } catch (error) {
        res.status(500).json(response(500, error));
        throw error;
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await collection.deleteOne({_id : ObjectId(id)});
        if (user.deletedCount == 0){
            res.status(200).json(response(204, user));
        }
        res.status(200).json(response(203, user));
    } catch (error) {
        res.status(500).json(response(500, error));
    }
}




export {
    insertarUsuario,
    getAllUsers, getUserById,
    getUserSearch,
    actualizarUsuario,
    deleteUsuario
}