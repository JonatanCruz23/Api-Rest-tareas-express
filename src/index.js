import  app  from './app'

app.listen(app.get('port'))
console.log('corriendo en el puerto' , app.get('port'))