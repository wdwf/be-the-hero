const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

  //Listando
  async index (request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  //=============================================

  //Criando Conta da ong
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    //Criando um id
    const id = crypto.randomBytes(4).toString('HEX');
    
    //Cadastrando a ong / fazendo a conecção com o BD
  
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
  
    return response.json({ id });
  }
};