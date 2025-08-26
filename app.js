const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado en puerto 3000 => http://localhost:3000');
});