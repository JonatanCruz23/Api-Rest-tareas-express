import express from 'express';
import router from './routes/tarea.routes';
import './database'

 const app = express()

 //MIDDLWARES
 app.use(express.json())

app.set('port', process.env.PORT || 3000)

//IMPORTANCION DE LAS RUTASN EN EL ARCHIVO ROUTER
app.use('/api', router)

export default app