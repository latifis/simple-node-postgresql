const db = require("../models");
const Car = db.car;
const Op = db.Sequelize.Op;
const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-="']/; // List of special characters that are considered invalid

// Retrieve all Cars from the database.
exports.findAll = (req, res) => {
  Car.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cars.",
      });
    });
};

// Retrieve all Cars With Filter from the database.
exports.findAllWithFilter = (req, res) => {
  const desc_brand = req.body.getListFilterUnitBrand.p_search;
  var condition = desc_brand
    ? { desc_brand: { [Op.iLike]: `%${desc_brand}%` } }
    : null;

  Car.findAll({ where: condition })
    .then((data) => {
      // Maximum character length checking
      if (!req.body.getListFilterUnitBrand.p_search && req.body.getListFilterUnitBrand.p_search.length > 10) {
        res.send({
          OUT_STAT: "F",
          OUT_MESS: "Invalid Input",
        });
        return;
      }

      // Change the data format as needed
      const formattedData = data.map((car) => ({
        cd_brand: car.cd_brand,
        desc_brand: car.desc_brand,
      }));

      // Checks whether it contains special characters
      if (specialCharsRegex.test(req.body.getListFilterUnitBrand.p_search)) {
        res.send({
          OUT_STAT: "F",
          OUT_MESS: "Invalid Input",
        });
      } else {
        // Send the response in the desired format
        res.send({
          OUT_STAT: "T",
          OUT_MESS: "Success",
          OUT_DATA: formattedData,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        OUT_STAT: "F",
        OUT_MESS: err.message || "Some error occurred while retrieving cars.",
      });
    });
};
