const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('node-f', 'root', 'sanjay', {
  host: 'localhost',
  dialect: 'mysql'//
  
});
module.exports=sequelize;