const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe',{
    id:{
      type:DataTypes.UUID,
      allowNull: false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    Resumen:{
      type: DataTypes.STRING,
      allowNull:false
    },
    Puntuacion:{
      type: DataTypes.STRING,
    },
    Nivel:{
      type: DataTypes.STRING,
      allowNull:false
    },
    Pasos:{
      type: DataTypes.STRING,
    }
  });
};
