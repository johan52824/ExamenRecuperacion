const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const {PORT, URI} = require('./config');

class Server {
  constructor(){
    this.app = express();
    this.app.set('port', PORT);

    ///BD
    this.conexionBD();
    
    //Middlewares
    this.middlewares();

    //Rutas
    this.rutas();
  }

  conexionBD(){
    mongoose.connect(URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan('dev'));
  }

  rutas(){
    const EncuestaRoute = require('./routes/encuesta');
    this.app.use('/api/encuesta', EncuestaRoute);
  }

  listen(){
    this.app.listen(this.app.get('port'),()=>{
      console.log(`Servicio REST corriendo en el puerto ${this.app.get('port')}`);
    })
  }
}

module.exports = new Server();