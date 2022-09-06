import express from ('express');
const morgan = require('morgan')
const app = express();
const product = [{
    id: 1,
    nombre: 'control',
    price: 200
},
{
    id: 2,
    nombre: 'pantalla',
    price: 200
}]

app.use(morgan('dev'))
app.use(express.json())

app.get('/productos', (req,res)=>{
    res.json(product)
})

app.post('/productos', (req,res)=>{
    console.log(req.body)
    product.push({...req.body, id: product.length + 1})
    res.json(product)
})

app.get('/productos/:id', (req,res)=>{
    const producto = req.params.id
    console.log(producto)
    const productoEncontrado = product.find((product)=> product.id == producto)
    if(!productoEncontrado){
        return res.status(404).json({
            message: 'producto no encontrado'
        }) 
    }
    res.json(productoEncontrado)
})

app.put('/productos', (req,res)=>{
    res.send('actualizar producto')
})

app.delete('/productos', (req,res)=>{
    res.send('eliminar producto')
})


//app.listen(3000);
//console.log(`server on por 3000`)