import express, { Router } from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import 'dotenv/config';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routerUsuario from './routes/router_usuarios.js';

const app = express();
const port = process.env.PORT || 9000;
app.use(morgan('dev'));
app.use(bodyParser.json())

//routes
app.use('/api', routerUsuario);



// MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server");
//     db.connect
//     insertarUsuario(db, () => db.close())
// });




app.listen(5000, () => console.log('servidor iniciado en el puerto', port))