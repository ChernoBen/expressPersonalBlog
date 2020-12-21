const  express = require("express");
const router = express.Router();

router.get("/articles",(req,res)=>{
    res.send("Articles Route")
});

router.get("/admin/articles/new",(req,res)=>{
    res.send("admin routers")
});


module.exports = router;