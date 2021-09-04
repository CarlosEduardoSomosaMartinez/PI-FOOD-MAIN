const axios = require("axios");

async function getNameApi(req){
    let result=(await axios.get( "https://api.spoonacular.com/recipes/complexSearch?apiKey=5ec8b5e6d0be4b828ccbf63e1e0ffb60&number=100&addRecipeInformation=true")).data.results
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
             Imagen:result[i].image
            }
        )
    }
    return  apires;
}

async function getIdApi(req){
    const {id}=req.params;
    const result=(await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=5ec8b5e6d0be4b828ccbf63e1e0ffb60`)).data;
    
    return{
        id:result.id,
         name:result.title,
         Resumen:result.summary,
         Puntuacion:result.spoonacularScore,
         Nivel:result.healthScore,
         Pasos:result.analyzedInstructions,
         Imagen:result.image
        };

}
module.exports={
    getNameApi,
    getIdApi
}