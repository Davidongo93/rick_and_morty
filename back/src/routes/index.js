const {Router} = require("express");
const getCharById = require ("../controllers/getCharById.js")
const getCharDetail = require ("../controllers/getCharDetail.js")
let favs = require ("../utils/favs.js");

const router = Router();

router.get("/onsearch/:id",getCharById)
router.get("/detail/:id", getCharDetail)

router.post("/rickandmorty/fav",(req,res)=>{
    favs.push(req.body)
    res.status(200).json({status:"ok"})
});

router.get("/rickandmorty/fav",(req,res)=>{
    res.status(200).json(favs)
});

router.delete("/rickandmorty/fav/:id",(req,res)=>{
    const {id}= req.params;
    favs = favs.filter((char)=>char.id != id);
    console.log(`El personaje ${id} ha sido eliminado`);
    res.status(200).json(favs)
});
module.exports = router;