"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const { DB_NAME, POSTGRES_USER, POSTGRES_PASSWORD, ENVIROMENT } = process.env;
const basename = path.basename(__filename);
const config = require("../config/config")[ENVIROMENT];
const db = {};

let sequelize;
if (ENVIROMENT) {
  sequelize = new Sequelize(config);
} else {
  sequelize = new Sequelize(DB_NAME, POSTGRES_USER, POSTGRES_PASSWORD, config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  console.log(modelName, "esto es mi nombre de modelo");
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
