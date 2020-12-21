const Sequelize = require("sequelize");
const conn = new Sequelize('blog','root','Sapiencia123',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = conn;