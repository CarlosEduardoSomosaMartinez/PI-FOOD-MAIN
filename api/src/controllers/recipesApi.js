require('dotenv').config();
const axios = require("axios");
const {
KEY
  } = process.env;
  

async function getNameApi(req){
    let result=(await axios.get( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&number=100&addRecipeInformation=true`)).data.results
    if(req.query.name){
        result =result.filter((el)=>el.title.includes(req.query.name))
    }
    let apires=[];
    for(let i=0;i<result.length;i++){
      
        apires.push(
            {
            id:result[i].id,
             name:result[i].title,
             Resumen:result[i].summary,
             Puntuacion:result[i].spoonacularScore,
             Nivel:result[i].healthScore,
             Pasos:result[i].analyzedInstructions,
             Imagen:result[i].image,
             Types:result[i].diets
            }
        )



    }
    return  apires;
}

async function getIdApi(req){
    const {id}=req.params;
    const result=(await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}`)).data;
    console.log(result.diets)
    return{
        id:result.id,
         name:result.title,
         Resumen:result.summary,
         Puntuacion:result.spoonacularScore,
         Nivel:result.healthScore,
         Imagen:result.image,
         Types:result.diets
        };

}
module.exports={
    getNameApi,
    getIdApi
}