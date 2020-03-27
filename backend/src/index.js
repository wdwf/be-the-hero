//Requisitando o express
const express = require('express');
const cors = require('cors');
//Importando as rotas
const routes = require('./routes');

//criando a aplicação
const app = express();

app.use(cors())

//Especificando a utilização do json para realizar as requisiçoes para o corpo das requisiçoes
app.use(express.json());

app.use(routes);



app.listen(3333);
console.log('A aplicação esta rodando na porta 3333... ');
