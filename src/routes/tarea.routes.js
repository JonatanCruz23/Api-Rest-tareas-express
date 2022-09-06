import { Router } from "express";
import Tarea from "../model/tareas.schema";
import { getTarea } from "../controllers/tarea.controllers";

 const router = Router()

router.get('/', getTarea)

router.post('/', async (req, res)=>{
    console.log(req.body)
    const query = req.query
    const user = Tarea(req.body);
     await user.save()
    res.json({
        user,
        query
    })
});

router.get('/:id', async (req, res) =>{
    const {id} = req.params
    const tarea = await Tarea.findById(id)
    res.json({
        tarea
    })
})

router.put('/:id', async(req,res)=>{
    const {id} = req.params
    const tarea = req.body
    const tareaUpdate = await Tarea.findByIdAndUpdate(id, tarea)
    res.json({
        tareaUpdate
    })
})

router.delete('/:id', async (req,res) =>{
    const { id }= req.params
    const tarea = await Tarea.findByIdAndDelete(id)
    res.json({
        mesage: "tarea eliminada",
        tarea
    })
})


export default router;


