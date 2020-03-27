//Metodo up --> o que queremo fazer
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
    //Considerado uma chave primaria
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

//Metodo down --> Deu ruin o que fazer para voltar ao normal
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
