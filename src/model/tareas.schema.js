import { Schema, model } from "mongoose";

const Tarea = new Schema({
    nombre: {
        type: String,
        required: true,
        trinm: true
    },
    descripcion: {
        type: String,
        required: true,
        trinm: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

export default model('Tarea', Tarea)