exports.seed = function(knex, Promise) {
    return knex('ingredits').insert([   
      { ingredient_name: 'chicken' },
      { ingredient_name: 'dough' },
      { ingredient_name: 'olive oil' },
      { ingredient_name: 'salt' }
    ]);
  };
  