const express = require('express')
const recipeRouter = express.Router();
// const { v4: uuidv4 } = require('uuid');
const { Recipe } = require('../db.js')
const { createRecipe } = require('../Utils/routesFunctions')

recipeRouter.post('/', async (req, res, next) => {
    const newRecipeData = req.body
    try {
        const checkRecipeTitle = await Recipe.findOne({where: {
            title: newRecipeData.title
            }
        })
        if(checkRecipeTitle) {
            return res.send({message: 'This recipe is already created, try with a more accuarate title'})
        }
        const newRecipe = await createRecipe(newRecipeData)
        res.send(newRecipe)
    } catch (error) {
        next(error)
    }
})
  



module.exports = recipeRouter