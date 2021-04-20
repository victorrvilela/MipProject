
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('adms').del()
    .then(function () {
      // Inserts seed entries
      return knex('adms').insert([
        {id: 1, name: 'Kethory',
          password:'123456',
          email:'kethorybarros@gmail.com',
          phone:'31 98668-2581'
        },
        {id: 2, name: 'Victor',
          password:'1',
          email:'victorrochavilela@gmail.com',
          phone:'31 999999999'
        },
      ]);
    });
};
