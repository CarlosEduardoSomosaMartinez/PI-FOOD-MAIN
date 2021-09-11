const { Router } = require("express");
const {getNameApi,getIdApi}=require("../controllers/recipesApi");
const { getNameDb,getByIdDb } = require("../controllers/recipesDb");
const router = Router();

router.get("", async (req, res, next) => {
  try { 
    const apiRecetas = await getNameApi(req);
    const bdRecetas = await getNameDb(req);
    res.json([...apiRecetas, ...bdRecetas]);
  
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id",async(req, res, next) => {

  try {
    if (req.params.id.includes("-")) {

        const base=await getByIdDb(req)
        res.json(base)
    } else {
      
        const api=await getIdApi(req);
        res.json(api)
    }
  } catch (error) {
    res.status(500).send("roto");
  }
});



module.exports = router;