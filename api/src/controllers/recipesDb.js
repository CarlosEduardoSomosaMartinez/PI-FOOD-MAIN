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
  let bd=[]
  for(let i=0;i<bdRecetas.length;i++){
    let string1=[];
    bdRecetas[i].Types.map((el)=>{string1.push(el.name)});
    bd.push({
      id:bdRecetas[i].id,
      name:bdRecetas[i].name,
      Resumen:bdRecetas[i].Resumen,
      Puntuacion:bdRecetas[i].Puntuacion,
      Nivel:bdRecetas[i].Nivel,
      Pasos:bdRecetas[i].Pasos,
      Imagen:bdRecetas[i].Imagen,
      Types:string1
    });
  }
  return bd;
}
async function getByIdDb(req) {
  const { id } = req.params;
  const idBd = await Recipe.findOne({
    where: { id:id },
    include: [
      { model: Types, attributes: ["name"], through: { attributes: [] } },
    ],
  });
  let string =[];
for(let x=0;x<idBd.dataValues.Types.length;x++){
  string.push(idBd.dataValues.Types[x].dataValues.name)
}

  return {
    id:idBd.dataValues.id,
     name:idBd.dataValues.name,
     Resumen:idBd.dataValues.Resumen,
     Puntuacion:idBd.dataValues.Puntuacion,
     Nivel:idBd.dataValues.Nivel,
     Imagen:idBd.dataValues.Imagen,
     Types:string
    };
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
