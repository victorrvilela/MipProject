exports.up = function(knex) {
    return knex.schema.createTable('rdcs_response', function(table){ 
      table.increments('id');
      table.string('area').notNullable();
      table.integer('cod').notNullable();
      table.integer('obra').notNullable();
  
      table.string('name_leader').notNullable();
      table.foreign('name_leader').references('name').inTable('leaders');
  
      table.timestamp('createdAt', 'useTz:1', '4').defaultTo(knex.fn.now());
      table.string('rain').notNullable();
      table.string('redalert').notNullable();

      table.string('area_activity1').notNullable();
      table.foreign('area_activity1').references('area').inTable('activities');
      table.integer('cod_activity1').notNullable();
      table.foreign('cod_activity1').references('cod').inTable('activities');
      table.text('description_activity1', 'mediumtext').notNullable();
      table.foreign('description_activity1').references('description').inTable('activities');
      table.text('report1', 'longtext');
  
      table.string('area_activity2');
      table.foreign('area_activity2').references('area').inTable('activities');
      table.integer('cod_activity2');
      table.foreign('cod_activity2').references('cod').inTable('activities');
      table.text('description_activity2', 'mediumtext');
      table.foreign('description_activity2').references('description').inTable('activities');
      table.text('report2', 'longtext');
  
      table.string('area_activity3');
      table.foreign('area_activity3').references('area').inTable('activities');
      table.integer('cod_activity3');
      table.foreign('cod_activity3').references('cod').inTable('activities'); 
      table.text('description_activity3', 'mediumtext');
      table.foreign('description_activity3').references('description').inTable('activities');
      table.text('report3', 'longtext');
      
      table.string('area_activity4');
      table.foreign('area_activity4').references('area').inTable('activities');  
      table.integer('cod_activity4');
      table.foreign('cod_activity4').references('cod').inTable('activities');  
      table.text('description_activity4', 'mediumtext');
      table.foreign('description_activity4').references('description').inTable('activities');
      table.text('report4', 'longtext');
  
      table.string('area_activity5');
      table.foreign('area_activity5').references('area').inTable('activities');  
      table.integer('cod_activity5');
      table.foreign('cod_activity5').references('cod').inTable('activities');  
      table.text('description_activity5', 'mediumtext');
      table.foreign('description_activity5').references('description').inTable('activities');
      table.text('report5', 'longtext');
  
      table.string('area_activity6');
      table.foreign('area_activity6').references('area').inTable('activities');
      table.integer('cod_activity6');
      table.foreign('cod_activity6').references('cod').inTable('activities');
      table.text('description_activity6', 'mediumtext');
      table.foreign('description_activity6').references('description').inTable('activities');
      table.text('report6', 'longtext');

      table.string('name_employee1').notNullable();
      table.foreign('name_employee1').references('name').inTable('employees');
      table.integer('cod_employee1').notNullable();
      table.foreign('cod_employee1').references('cod').inTable('employees');
      table.string('occupation_employee1').notNullable();
      table.foreign('occupation_employee1').references('occupation').inTable('employees');
      table.integer('hr_1_ativ');

      table.string('name_employee2');
      table.foreign('name_employee2').references('name').inTable('employees');
      table.integer('cod_employee2');
      table.foreign('cod_employee2').references('cod').inTable('employees');
      table.string('occupation_employee2');
      table.foreign('occupation_employee2').references('occupation').inTable('employees');
      table.integer('hr_2_ativ');

      table.string('name_employee3');
      table.foreign('name_employee3').references('name').inTable('employees');
      table.integer('cod_employee3');
      table.foreign('cod_employee3').references('cod').inTable('employees');
      table.string('occupation_employee3');
      table.foreign('occupation_employee3').references('occupation').inTable('employees');
      table.integer('hr_3_ativ');

      table.string('name_employee4');
      table.foreign('name_employee4').references('name').inTable('employees');
      table.integer('cod_employee4');
      table.foreign('cod_employee4').references('cod').inTable('employees');
      table.string('occupation_employee4');
      table.foreign('occupation_employee4').references('occupation').inTable('employees');
      table.integer('hr_4_ativ');

      table.string('name_employee5');
      table.foreign('name_employee5').references('name').inTable('employees');
      table.integer('cod_employee5');
      table.foreign('cod_employee5').references('cod').inTable('employees');
      table.string('occupation_employee5');
      table.foreign('occupation_employee5').references('occupation').inTable('employees');
      table.integer('hr_5_ativ');

      table.string('name_employee6');
      table.foreign('name_employee6').references('name').inTable('employees');
      table.integer('cod_employee6');
      table.foreign('cod_employee6').references('cod').inTable('employees');
      table.string('occupation_employee6');
      table.foreign('occupation_employee6').references('occupation').inTable('employees');
      table.integer('hr_6_ativ');

      table.string('name_employee7');
      table.foreign('name_employee7').references('name').inTable('employees');
      table.integer('cod_employee7');
      table.foreign('cod_employee7').references('cod').inTable('employees');
      table.string('occupation_employee7');
      table.foreign('occupation_employee7').references('occupation').inTable('employees');
      table.integer('hr_7_ativ');

      table.string('name_employee8');
      table.foreign('name_employee8').references('name').inTable('employees');
      table.integer('cod_employee8');
      table.foreign('cod_employee8').references('cod').inTable('employees');
      table.string('occupation_employee8');
      table.foreign('occupation_employee8').references('occupation').inTable('employees');
      table.integer('hr_8_ativ');

      table.string('name_employee9');
      table.foreign('name_employee9').references('name').inTable('employees');
      table.integer('cod_employee9');
      table.foreign('cod_employee9').references('cod').inTable('employees');
      table.string('occupation_employee9');
      table.foreign('occupation_employee9').references('occupation').inTable('employees');
      table.integer('hr_9_ativ');

      table.string('name_employee10');
      table.foreign('name_employee10').references('name').inTable('employees');
      table.integer('cod_employee10');
      table.foreign('cod_employee10').references('cod').inTable('employees');
      table.string('occupation_employee10');
      table.foreign('occupation_employee10').references('occupation').inTable('employees');
      table.integer('hr_10_ativ');

      table.string('name_employee11');
      table.foreign('name_employee11').references('name').inTable('employees');
      table.integer('cod_employee11');
      table.foreign('cod_employee11').references('cod').inTable('employees');
      table.string('occupation_employee11');
      table.foreign('occupation_employee11').references('occupation').inTable('employees');
      table.integer('hr_11_ativ');

      table.string('name_employee12');
      table.foreign('name_employee12').references('name').inTable('employees');
      table.integer('cod_employee12');
      table.foreign('cod_employee12').references('cod').inTable('employees');
      table.string('occupation_employee12');
      table.foreign('occupation_employee12').references('occupation').inTable('employees');
      table.integer('hr_12_ativ');

      table.string('name_employee13');
      table.foreign('name_employee13').references('name').inTable('employees');
      table.integer('cod_employee13');
      table.foreign('cod_employee13').references('cod').inTable('employees');
      table.string('occupation_employee13');
      table.foreign('occupation_employee13').references('occupation').inTable('employees');
      table.integer('hr_13_ativ');

      table.string('name_employee14');
      table.foreign('name_employee14').references('name').inTable('employees');
      table.integer('cod_employee14');
      table.foreign('cod_employee14').references('cod').inTable('employees');
      table.string('occupation_employee14');
      table.foreign('occupation_employee14').references('occupation').inTable('employees');
      table.integer('hr_14_ativ');

      table.string('name_employee15');
      table.foreign('name_employee15').references('name').inTable('employees');
      table.integer('cod_employee15');
      table.foreign('cod_employee15').references('cod').inTable('employees');
      table.string('occupation_employee15');
      table.foreign('occupation_employee15').references('occupation').inTable('employees');
      table.integer('hr_15_ativ');

      table.text('obs', 'longtext');

  });
  
  
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('rdcs');
  };