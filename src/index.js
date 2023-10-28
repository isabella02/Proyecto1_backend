import express from 'express';
import routerUsuarios from './usuarios/usuarios.router';
import routerRestaurantes from './restaurantes/restaurantes.router';
import mongoose from 'mongoose';
import routerProductos from './productos/productos.router';
import routerPedidos from './pedidos/pedidos.router';

const app = express();

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is running on port 8080');
  }
});

app.use(express.json());
app.use('/usuarios', routerUsuarios);
app.use('/restaurantes', routerRestaurantes);
app.use('/productos', routerProductos);
app.use('/pedidos', routerPedidos);


const password = 'dl623baf0o7WJEw8'
const dbName = 'BackendDB'
const uri = `mongodb+srv://isabellacuesta:${password}@cluster0.ozhblsa.mongodb.net/${dbName}`;

// Establece las opciones de conexión
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conecta a la base de datos utilizando Mongoose
mongoose.connect(uri, options)
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });


