const express = require("express");

const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Coming to you live from the API!" });
  });
  
  router.get("/cars", (req, res) => {
    db("cars")
      .then(cars => {
        res.status(200).json(cars);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "ERROR: No cars to see here." });
      });
  });

  
router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids => {
      db('cars').where({ id: ids[0] })
      .then(newCarEntry => {
        res.status(201).json(newCarEntry);
      });
    })
    .catch (err => {
      console.log('POST error', err);
      res.status(500).json({ message: "Failed to store data" });
    });
  });
  
  module.exports = router;