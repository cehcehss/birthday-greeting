'use strict';
  var fs        = require('fs');
  var path      = require('path');
  var Sequelize = require('sequelize');
  var basename  = path.basename(__filename);
  var config    = {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
    "port":process.env.MYSQL_PORT
  };
  var db        = {};
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
  
  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
      db[model.name] = model;
    });
  
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

module.exports = db;
