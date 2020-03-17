exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        { make: "Millennium", model: "Falcon", VIN: "1111", mileage: 114 },
        { make: "Millennium", model: "Falcon", VIN: "1111", mileage: 114 }
      ]);
    });
};
