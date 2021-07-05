const express = require('express')
// const axios = require('axios');
const { findAllRecipes, findAllRecipesName, findRecipeDetails, filterKeyValues, standarizeDiets } = require('../Utils/routesFunctions')
const recipesRouter = express.Router();
// const { Recipe } = require('../db.js')


recipesRouter.get('/', async (req, res, next) => {
    const { name } = req.query
    try {
        if(name) {
            const filteredRecipesByName = await findAllRecipesName(name)
            if(filteredRecipesByName.length > 0) {
                const allRecipesFiltered = await filterKeyValues(filteredRecipesByName)
                const standarizeRecipes = await standarizeDiets(allRecipesFiltered)
                return res.send(standarizeRecipes)
                // return res.send(allRecipesFiltered)
            }
            return res.status(400).send({
                message: 'Sorry, we couldn`t find any recipe with these words'
             });
        }    
        const allRecipes = await findAllRecipes()
        const allRecipesFiltered = await filterKeyValues(allRecipes)
        const standarizeRecipes = await standarizeDiets(allRecipesFiltered)
        res.send(standarizeRecipes)
        } 
    catch (e) {
        res.status(e.response.status).send(e)  
    } 
})

recipesRouter.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const recipeDetails = await findRecipeDetails(id)
        if(recipeDetails.status && recipeDetails.status === 404){
            return res.status(404).send({message: "Couldn`t find the recipe"})
        }
        res.send(recipeDetails)
    } catch (e) {
        res.status(400).send({message: "Couldn`t find the recipe"})
    }
})
  



module.exports = recipesRouter