//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { types } = require('pg');
require('dotenv').config();
const axios=require("axios")
const server = require('./src/app.js');
const { conn,Types} = require('./src/db.js');
const { map } = require('./src/app.js');
const {
  KEY
    } = process.env;
    

// Syncing all the models at once.
conn.sync({ force: true }).then(async function(){
  let result=(await axios.get( "https://api.spoonacular.com/recipes/complexSearch?apiKey="+KEY+"&number=100&addRecipeInformation=true")).data.results
    let arreglo=[];
  for(let x=0;x<result.length;x++){
      for(let i=0;i<result[x].diets.length;i++){
        if(!arreglo.includes(result[x].diets[i])){
          arreglo.push(result[x].diets[i])
        }
      }
  }
  let objetos=[];
  for(let i=0;i<arreglo.length;i++){
    objetos.push({
      id:i+1,
      name:arreglo[i]
    })
  }
  Types.bulkCreate(objetos);
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
