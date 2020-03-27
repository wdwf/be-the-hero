//Exporta o express
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Estamos desacoplando o modulo de rotas do express em uma nova variavel
const routes = express.Router();

//-----------------------------------------------
//Login da ONG
routes.post('/sessions', SessionController.create)

//-----------------------------------------------
//Listando ONGs
routes.get('/ongs', OngController.index);

//Criando ONGs
routes.post('/ongs', OngController.create);

//-----------------------------------------------
//Listatando os casos especificos
routes.get('/profile', ProfileController.index);

//-----------------------------------------------

//Listando os Casos
routes.get('/incidents', IncidentController.index);

//Criando Casos
routes.post('/incidents', IncidentController.create);

//-----------------------------------------------

routes.delete('/incidents/:id',IncidentController.delete)

//-----------------------------------------------

//Exportando para ter acesso ao valores pelo index.js
module.exports = routes;