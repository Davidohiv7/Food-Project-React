const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    spoonacularScore: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    healthScore: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    instructions: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING
    },
  });
};
