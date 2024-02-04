module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("car", {
      cd_brand: {
        type: Sequelize.STRING
      },
      desc_brand: {
        type: Sequelize.STRING
      }
    });
  
    return Car;
  };