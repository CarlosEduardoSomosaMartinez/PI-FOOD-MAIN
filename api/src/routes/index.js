const { Router } = require('express');
const recipes=require('./recipes');
const recipe=require('./recipe')
const types=require('./types');
const router = Router();
router.use('/recipes',recipes);
router.use('/recipe',recipe);
router.use('/types',types)
module.exports = router;
