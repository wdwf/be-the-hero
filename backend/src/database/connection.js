//Importando a ferramenta
const knex = require('knex');
//Importando as configuraçoes do BD
const configuration = require('../../knexfile');
//Criando a conecção
const connection = knex(configuration.development);

module.exports = connection;