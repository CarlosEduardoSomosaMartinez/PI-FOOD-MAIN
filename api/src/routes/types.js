const { Router } = require("express");
const { Types } = require("../db");
const router = Router();
router.get("", async (req, res, next) => {
  try {
    res.send(await Types.findAll());
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
