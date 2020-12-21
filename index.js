const Sequelize = require("sequelize");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conn = require("./database/database");

//view engine
app.set('view engine','ejs');
//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//arquivos estaticos
app.use(express.static('public'));
//database conn
conn.authenticate().then(()=>{
    console.log("Connection has been done !")
}).catch((error)=>{
    console.log(error)
});

//------------------rotas---------------------------
app.get("/",(req,res)=>{
    res.send("index");
});



app.listen(8080,()=>{
    console.log("Sever is running ...")
});
