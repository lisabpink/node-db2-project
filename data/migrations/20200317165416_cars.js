
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();
        tbl.string("make", 128).notNullable();
        tbl.string("model", 128).notNullable();
        tbl
          .string("VIN", 32)
          .unique()
          .notNullable();
        tbl.integer("mileage", 10).notNullable();
        tbl.string("transmission type", 50);
        tbl.string("Title Status");
      });
};

exports.down = function(knex) {
  
};
