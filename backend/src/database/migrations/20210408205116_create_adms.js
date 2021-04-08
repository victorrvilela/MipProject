exports.up = function(knex) {
    return knex.schema.createTable('adms', function(table){
      table.increments('id');
      table.string('name').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('adms');
  };
  