import Tarea from "../model/tareas.schema";
import { response, request} from "express";

export const getTarea = async (req, res = response) =>{
    const tarea = await Tarea.find()
    
    res.json(tarea)
    
}

