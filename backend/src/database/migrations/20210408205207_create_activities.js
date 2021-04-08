exports.up = function(knex) {
    return knex.schema.createTable('activities', function(table){
      table.increments('id');
      table.string('area').notNullable();
      table.integer('cod').notNullable();
      table.text('description', 'mediumtext').notNullable();     
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('activities');
  };