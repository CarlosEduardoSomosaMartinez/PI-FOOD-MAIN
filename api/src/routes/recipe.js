const { Router } = require("express");
const {Recipe}=require("../db")
const { postRecipe} = require("../controllers/recipesDb");

const router = Router();
router.post("", async (req, res, next) => {
    try {
      const post = await postRecipe(req);
      
      if (!post.errors) {
        
         const recipe=(await Recipe.findByPk(post.id));
         let arrglo=req.body.types.split(",")
    
         for(let i=0;i<arrglo.length;i++){
          (await recipe.addTypes(parseInt(arrglo[i])))
         }
  
         res.json(post);
  
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  module.exports = router;