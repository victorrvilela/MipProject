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
  
      table.string('area_activity1').notNullable();
      table.foreign('area_activity1').references('area').inTable('activities');
  
      table.integer('cod_activity1').notNullable();
      table.foreign('cod_activity1').references('cod').inTable('activities');
  
      table.text('description_activity1', 'mediumtext').notNullable();
      table.foreign('description_activity1').references('description').inTable('activities');
  
      table.string('area_activity2');
      table.foreign('area_activity2').references('area').inTable('activities');
  
      table.integer('cod_activity2');
      table.foreign('cod_activity2').references('cod').inTable('activities');
  
      table.text('description_activity2', 'mediumtext');
      table.foreign('description_activity2').references('description').inTable('activities');
  
      table.string('area_activity3');
      table.foreign('area_activity3').references('area').inTable('activities');
  
      table.integer('cod_activity3');
      table.foreign('cod_activity3').references('cod').inTable('activities');
  
      table.text('description_activity3', 'mediumtext');
      table.foreign('description_activity3').references('description').inTable('activities');
  
      table.string('area_activity4');
      table.foreign('area_activity4').references('area').inTable('activities');
  
      table.integer('cod_activity4');
      table.foreign('cod_activity4').references('cod').inTable('activities');
  
      table.text('description_activity4', 'mediumtext');
      table.foreign('description_activity4').references('description').inTable('activities');
  
      table.string('area_activity5');
      table.foreign('area_activity5').references('area').inTable('activities');
  
      table.integer('cod_activity5');
      table.foreign('cod_activity5').references('cod').inTable('activities');
  
      table.text('description_activity5', 'mediumtext');
      table.foreign('description_activity5').references('description').inTable('activities');
  
      table.string('area_activity6');
      table.foreign('area_activity6').references('area').inTable('activities');
  
      table.integer('cod_activity6');
      table.foreign('cod_activity6').references('cod').inTable('activities');
  
      table.text('description_activity6', 'mediumtext');
      table.foreign('description_activity6').references('description').inTable('activities');
  
  });
  
  
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('rdcs');
  };
  