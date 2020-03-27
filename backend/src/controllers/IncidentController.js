//REQUISITANDO O BANCO DE DADOS
const connection = require('../database/connection');

module.exports = {

  //Listando os casos
  async index(request, response) {

    //Fazendo um esquema de paginação de elementos

    const { page = 1 } = request.query;

    //Retornando a quantidade de casos
    const [count] = await connection('incidents').count(); 

    const incidents = await connection('incidents').select('*')
      //
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      //Será pego de 5 em 5 elementos então || page = 1 - 1 = 0 * 5 --> 5 elementos 
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);

      response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  },

  //==============================================

  //Criando o caso
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  },

  //==============================================

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

      if (incident.ong_id != ong_id) {
        return response.status(401).json({ error: 'Operation not permitted.' });
      }

      await connection('incidents').where('id', id).delete();

      return response.status(204).send();
  }
};