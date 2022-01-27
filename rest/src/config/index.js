if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

module.exports = {
  PORT: process.env.PORT,
  URI: process.env.URI
}