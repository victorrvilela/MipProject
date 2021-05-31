exports.up = function(knex) {
    return knex.schema.createTable('leaders', function(table){ 
      table.increments('id');
      table.string('name').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.string('area').notNullable();
  
      table.string('name_adm').notNullable();
      table.foreign('name_adm').references('name').inTable('adms');
  
  });
  
  
  
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('leaders');
  };
  