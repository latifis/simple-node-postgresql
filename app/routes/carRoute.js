module.exports = app => {
    const car = require("../controllers/carController.js");
  
    var router = require("express").Router();

    // Retrieve all Cars
    router.get("/", car.findAll);
    
    // Retrieve all Cars With Filter
    router.post("/", car.findAllWithFilter);
  
    app.use('/api/cars', router);
  };