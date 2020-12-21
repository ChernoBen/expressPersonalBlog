const Sequelize = require("sequelize");
const conn = require("../database/database");
const Category = require("../categories/Category");

const Article = conn.define('articles',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    body:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});
//criando relação
Category.hasMany(Article);//relação one to many 1-n
Article.belongsTo(Category);//belongsTo representa relação 1-1

// sincronizando tabelas após criação de relação ou qualquer edição
//Article.sync({force:true});

module.exports = Article;