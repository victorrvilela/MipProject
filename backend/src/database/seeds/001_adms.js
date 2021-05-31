
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('adms').del()
    .then(function () {
      // Inserts seed entries
      return knex('adms').insert([
        {
          id: 1,
          name: 'Victor',
          password:'1',
          email:'victorrochavilela@gmail.com',
          phone:'31983063928'
        },
        {
          id: 2,
          name: 'Kethory',
          password:'1',
          email:'kethorybarros@gmail.com',
          phone:'31999999999'
        },
        
      ]);
    });
};
