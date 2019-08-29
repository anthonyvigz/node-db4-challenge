exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'Chicken Pot Pie' },
      { recipe_name: 'Steak Tips' }
    ]);
  };
  