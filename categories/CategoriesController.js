const  express = require("express");
const router = express.Router();

router.get("/categories",(req,res)=>{
    res.send("Categories Route")
});

router.get("/admin/categories/new",(req,res)=>{
    res.send("admin routers")
});


module.exports = router;