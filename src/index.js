const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const routes = require('./routes'); 
const http = require('http');
const {setupWebSocket} = require('./webSocket');

const app = express();
const server = http.Server(app);


setupWebSocket(server); 

mongoose.connect('mongodb+srv://lucas:lucas@cluster0-elxqr.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);

/**
 * Métodos HTTP -> GET, POST PUT, DELETE
 * 
 * Tipos de Parâmetros:
 * 
 * Query params : request.query (filtros, ordenação paginação ...)
 * Route params : request.params (Identificar um recurso na alteração ou remoção)
 * Body:  request.body (Dados para criação ou alteração de um registro)
 * 
 * MongoDB (Não-relacional)
 *    -> Otimo para poucos relacionamentos
 * 
 * 
 *       
 */