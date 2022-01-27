const express = require('express');
const morgan = require('morgan');
const path = require ('path');
const {PORT} = require('./config');

class Server{
  constructor(){
    this.app = express();
    this.app.set('port', PORT);

    //Middlewares
    this.middlewares();

    //Rutas
    this.rutas();
  }

  middlewares(){
    this.app.set('views',path.join(__dirname,'views'));
    this.app.set('view engine','ejs');
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  rutas(){
    this.app.use(require('./routes/encuesta'));
  }

  listen(){
    this.app.listen(this.app.get('port'),()=>{
      console.log(`SSR corriendo en el puerto ${this.app.get('port')}`);
    })
  }
}

module.exports = new Server();