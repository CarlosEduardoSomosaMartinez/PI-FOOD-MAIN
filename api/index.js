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
const server = require('./src/app.js');
const { conn,Types} = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  const data=[
    {id:"1",name:"Gluten Free"},{id:"2",name:"Ketogenic"},{id:"3",name:"Vegetarian"},{id:"4",name:"Lacto-Vegatarian"},{id:"5",name:"Ovo-Vegetarian"},{id:"6",name:"Vegan"},{id:"7",name:"Pescetarian"},{id:"8",name:"Paleo"},{id:"9",name:"Primal"},{id:"10",name:"Whole30"}
    ]
    Types.bulkCreate(data);
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
