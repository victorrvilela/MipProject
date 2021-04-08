exports.up = function(knex) {
    return knex.schema.createTable('employees', function(table){
      table.increments('id');
      table.string('name').notNullable();
      table.integer('cod').notNullable();
      table.string('occupation').notNullable();
      
      table.string('name_leader').notNullable();
      table.foreign('name_leader').references('name').inTable('leaders');

      table.string('name_adm').notNullable();
      table.foreign('name_adm').references('name').inTable('adms');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('employees');
  };
  