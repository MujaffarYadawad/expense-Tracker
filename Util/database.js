const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-expense','root','Mujaffar@MH2007',{
    dialect:'mysql',
    host:'localhost'
});


module.exports=sequelize; 