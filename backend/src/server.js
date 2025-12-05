const express = require('express');
const app = express();

app.use(express.json());

let productos = [];

// Ruta POST
app.post('/productos', (req, res) => {
  const producto = req.body;
  productos.push(producto);
  res.status(201).json({
    mensaje: "Producto agregado",
    data: producto
  });
});

// Ruta GET
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Arrancar servidor
app.listen(3000, () => {
  console.log("Servidor backend escuchando en http://localhost:3000");
});
