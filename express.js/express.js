// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());



//1
app.get('/api/', (req, res) => {
  res.status(200).json({ mensaje: 'hola mundo' });
});



//2

app.get('/api/suma', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const resultado = num1 + num2;
  res.status(200).json({ resultado });
});



//3 

app.get('/api/usuario/:nombre', (req, res) => {
    const nomUsuario = req.params.nombre;
    res.status(200).json({ usuario: nomUsuario });
});



//4 

app.get('/api/swapi/:numpersonaje',async (req,res)=>{
    const numpersonaje = req.params.numpersonaje;

    try{
    const response= await axios.get(`https://swapi.dev/api/people/${numpersonaje}`);
    const personaje = response.data;
    res.status(200).json({personaje});
    }
    catch(error){
        res.status(404).json({error:'personaje no encontrado'});
    }
});



//5 

app.put('/api/body', (req, res) => {
  const requestBody = req.body;
  res.status(200).json(requestBody);
});


//6

app.post
('/api/suma', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const resultado = num1 + num2;
  res.status(200).json({ resultado });
}); 



//7 

app.delete('/api/:id', (req, res) => {
  const id = parseInt(
req.params.id
);
  if (id === 3) {
    res.status(200).json({ mensaje: `Se ha eliminado el objeto con ID ${id}` });
  } else {
    res.status(404).json({ mensaje: `No se encontró el objeto con el ID especificado` });
  }
});



const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});