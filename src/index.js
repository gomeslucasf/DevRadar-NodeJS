const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); 
const app = express();

mongoose.connect('mongodb+srv://lucas:lucas@cluster0-elxqr.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);
app.listen(3333);
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