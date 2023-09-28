const Sequelize  = require('sequelize');
const sequelize=require('../utils/database');

//price //stock // itemName ,itemInfo, itemPrice, stock
const shop=sequelize.define("shop",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    itemName:{
        type:Sequelize.TEXT

    },
    itemInfo:{
        type:Sequelize.TEXT,
    },
    itemPrice:{
        type:Sequelize.DOUBLE,


    },
    stock:{
        type:Sequelize.INTEGER

    },


});
module.exports=shop;