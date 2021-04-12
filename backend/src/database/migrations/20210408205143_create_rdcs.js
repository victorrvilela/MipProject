exports.up = function(knex) {
    return knex.schema.createTable('rdcs', function(table){ 
      table.increments('id');
      table.string('area').notNullable();
      table.integer('cod').notNullable();
      table.integer('obra').notNullable();
  
      table.string('name_adm').notNullable();
      table.foreign('name_adm').references('name').inTable('adms');
  
      table.string('name_leader').notNullable();
      table.foreign('name_leader').references('name').inTable('leaders');
  
     
  
  });
  
  
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('rdcs');
  };
  