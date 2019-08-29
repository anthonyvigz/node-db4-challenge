
exports.up = function(knex) {
  return (knex.schema.createTable('recipes', tbl => {
      tbl.increments('id');
      tbl.string('recipe_name', 128).notNullable().unique();
  })
  .createTable('ingredients', tbl => {
    tbl.increments('id');
    tbl.string('ingredient_name', 128).notNullable();
    })
    .createTable('ingredients_recipes', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('recipes');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('ingredients');
        tbl.float('quantity').notNullable();
        tbl.primary(['recipe_id', 'ingredient_id'])
    })
  )
};

exports.down = function(knex) {
  
};
