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
      // Required header checking
      const expectedHeaders = {
        "apikey": "7def4ec4deab71e2c5911ee7181c8bf077582e9cc397af95c76fb0d459f0",
        "x-content-type-option": "nosniff",
        "x-xss-protection": "1; mode=block",
        "strict-transport-security":
          "max-age=31536000; includeSubDomains; preload",
        "x-frame-option": "SAMEORIGIN",
      };
      
      for (const header in expectedHeaders) {
        if (
          !req.headers[header] ||
          req.headers[header] !== expectedHeaders[header]
        ) {
          res.send({
            OUT_STAT: "F",
            OUT_MESS: "You do not have permission to access the API",
          });
          return;
        }
      }

      // Maximum character length checking
      if (
        !req.body.getListFilterUnitBrand.p_search &&
        req.body.getListFilterUnitBrand.p_search.length > 10
      ) {
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
