const { Recipe, Types } = require("../db");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
async function getNameDb(req) {
  const { name } = req.query;
  const condicion = name
    ? {
        where: { name: { [Op.like]: `%${name}%` } },
        include: [
          { model: Types, attributes: ["name"], through: { attributes: [] } },
        ],
      }
    : {
        include: [
          { model: Types, attributes: ["name"], through: { attributes: [] } },
        ],
      };
  const bdRecetas = await Recipe.findAll(condicion);
  return bdRecetas;
}
async function getByIdDb(req) {
  const { id } = req.params;
  const idBd = await Recipe.findByPk(id);
  return idBd;
}
async function postRecipe(req) {
  let recipes1 = req.body;
  return Recipe.create({
    ...recipes1,
    id: uuidv4(),
  })
    .then((characters) => characters)
    .catch((error) => error);
}

module.exports = {
  getNameDb,
  getByIdDb,
  postRecipe,
};
