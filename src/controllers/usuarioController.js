import { db,  client } from "../db/connect_db.js";



const getAllUsers = async (req, res)=> {
    try {
        const collection = db.collection('usuarios')
        const allUsers = await collection.find();
        const result = await allUsers.toArray();

        res.json(result);
    } catch (error) {
        res.json(error)
    } finally {
        //await client.close()
    }
}


const insertarUsuario = async (req, res) => {
    try {
        const usuario = req.body
        console.log(usuario)
        const collection = db.collection('usuarios')
        const insertResult = await collection.insertOne(usuario);
        const result = await insertResult.toArray();
        res.json(result)
    } catch (error) {
        res.json(error)
    } finally {
        await client.close()
    }
}




export { insertarUsuario, getAllUsers }