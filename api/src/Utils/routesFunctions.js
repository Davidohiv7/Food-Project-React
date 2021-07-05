const { Recipe, Type } = require('../db.js')
const axios = require('axios');
const { URL_Search, URL_Search_Detailed} =require('../Utils/const')
const { v4: uuidv4 } = require('uuid');



async function findAllRecipes() {
    //Creo un array con las promesas de buscar todo en mi DB y la API externa
    const promisesArray = [Recipe.findAll({ 
        include: {
            model: Type,
            //Con esto especifico que atributos quiero de la otra tabla
            attributes: ['name'],
            //Con esto evito que me pase la tabla intermedia
            through: {attributes: []}
        }
    }), axios.get(URL_Search)]
    //Le paso el array de promesas a Promise.all para que me devuelva un array con las respuestas de ambas
    const arrayAllRecipes = await Promise.all(promisesArray)
    // const allRecipes = arrayAllRecipes[0].concat(arrayAllRecipes[1].data)
    const allRecipes = [...arrayAllRecipes[0], ...arrayAllRecipes[1].data.results]
    return allRecipes
}



async function findAllRecipesName(name) {
    //Separo todas las palabras recibidas dentro de Name, las paso a minuscula y las meto en un array
    const lowNamesArray = name.split(' ').map(name => name.toLowerCase())
    //Creo otro array con las mismas palabras pero con mayuscula inicial
    const capnNamesArray = lowNamesArray.map(name => name[0].toUpperCase() + name.slice(1));
    //Busco todas las recetas de mi base de datos, incluyendoles la tabla de tipos de dieta (type)
    const myRecipes = await Recipe.findAll({ 
        include: {
            model: Type,
            //Con esto especifico que atributos quiero de la otra tabla
            attributes: ['name'],
            //Con esto evito que me pase la tabla intermedia
            through: {attributes: []}
        }
    })
    //Pido a la API externa que me envie todas las recetas que tienen
    const spoonRecipes = await axios.get(URL_Search)
    //Concateno tanto las recetas de la DB y de la API externa
    const allRecipes = myRecipes.concat(spoonRecipes.data.results)
    //Filtro el array concatenado de mi DB y la API utilizando los array de palabras de busqueda.
    const filteredRecipes = allRecipes.filter(r => {
        //Creo un array de arrays, donde cada subarray es un par de booleanos
        const boolArrayPairs = capnNamesArray.map((n, i) => [r.title.includes(n), r.title.includes(lowNamesArray[i])])
        //Reviso cada para de booleanos, si alguno es true es por que existe la receta
        const filteredBoolArray = boolArrayPairs.map(b => b.includes(true))
        //Si existe un solo false, es porque no cumple con todo
        return !filteredBoolArray.includes(false)
    })
    //Devuelvo el JSON filtrado, para que el endpoint lo devuelva
    return filteredRecipes
}



async function filterKeyValues(recipesArray) {

    const keyRecipes = ['id', 'title', 'image', 'diets', 'types', 'healthScore', 'spoonacularScore']

    const filteredRecipesArray = recipesArray.map(recipe => {
        return keyRecipes.reduce((obj, key) => {
            return {
                ...obj,
                [key]: recipe[key]
            }
        }, {})
    })
    const standarRecipesArray = filteredRecipesArray.map(recipe => {
        if(recipe.types) {
            recipe.diets = recipe.types.map(type => type.name)
            delete recipe.types
            return recipe
        }
        return recipe
    })
    return standarRecipesArray
}

//Para un objeto
async function standarizeDiet(recipe) {
    recipe.diets.forEach((d, i) => {
        if(d.includes('vegetarian') && !d.includes('-vegetarian')) {
            const splitDiets = d.split(' ').map(splitDiet => {
                if(splitDiet === 'vegetarian') return splitDiet
                if(splitDiet !== 'vegetarian') return splitDiet + '-vegetarian'
            })
            recipe.diets.splice(i, 1)
            recipe.diets = [...recipe.diets, ...splitDiets]
        }
        if(d.includes('-vegetarian') && !recipe.diets.includes('vegetarian')) {
            recipe.diets.push('vegetarian')
        }
    })
    return recipe
}

//Para arrays de dieta
async function standarizeDiets(recipesArray) {
    recipesArray.forEach(recipe => {
        recipe.diets.forEach((d, i) => {
            if(d.includes('vegetarian') && !d.includes('-vegetarian')) {
                const splitDiets = d.split(' ').map(splitDiet => {
                    if(splitDiet === 'vegetarian') return splitDiet
                    if(splitDiet !== 'vegetarian') return splitDiet + '-vegetarian'
                })
                recipe.diets.splice(i, 1)
                recipe.diets = [...recipe.diets, ...splitDiets]
            }
            if(d.includes('-vegetarian') && !recipe.diets.includes('vegetarian')) {
                recipe.diets.push('vegetarian')
            }
        })
    })
    return recipesArray
}



async function findRecipeDetails(id) {
    //Verifico si el ID es un UUID, si lo es pertenece a mi DB, si no, pertenece a la API externa
    if(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
        try {
           //Si es de mi DB, lo busco utilizando el ID
        const dbRecipe = await Recipe.findOne({ 
            where: { 
                id: id 
            },
            include: {
                model: Type,
                //Con esto especifico que atributos quiero de la otra tabla
                attributes: ['name'],
                //Con esto evito que me pase la tabla intermedia
                through: {attributes: []}
            }
        });
        //Lo estandarizo de arrray de objetos a array de strings
        if(dbRecipe && dbRecipe.types) {
            const diets = dbRecipe.types.map(type => type.name)
            const filtRecipe = {...dbRecipe.dataValues, diets: diets}
            delete filtRecipe.types
            return filtRecipe
        }
        return {status: 404, message: 'Couldn`t find the recipe'} 
        } catch (error) {
            return {message: 'Couldn`t find the recipe'} 
        }
    }
    //Si es de la API externa, le agrego el ID a la URL para hacer un request
    const URL = URL_Search_Detailed.replace('XXXXX', id)
    //Hago un get a la API externa para obtener la receta
    const spoonRecipeDetail = await axios.get(URL)
    //Este array es para filtrar los keys del JSON que me devuelve la API externa
    const keyRecipes = ['id', 'title', 'summary', 'spoonacularScore', 'healthScore', 'instructions', 'image', 'diets']
    //Creo un objeto vacio con el reduce, y le paso a cada key del array, el valor de la misma key del JSON
    //que me devolvio la API externa
    const filterSpoonRecipeDetail = keyRecipes.reduce((obj, key) => {
        return {
            ...obj,
            [key]: spoonRecipeDetail.data[key]
        }
    }, {})
    //Devuelvo mi objeto filtrado
    const stdDiet = standarizeDiet(filterSpoonRecipeDetail)
    return stdDiet
}



async function createRecipe(data) {
    //Creo una nueva receta utilizando los parametros que recibo por Body
    const newRecipe = await Recipe.create({
        ...data,
        id: uuidv4()
    })
    //Verifico que me hayan enviado los types
    if(data.types && data.types.length > 0){
        //Creo un array con las promesas de busqueda de cada tipo de dieta
        const typesList = data.types.map(async (type) => {
            return Type.findOne({ where: { name: type } });
        })
        //Le paso el array de promesas a promise.all para recibir un array con la respuesta de todas 
        const response = await Promise.all(typesList)
        //Le paso el array con la respuesta de todas las promesas a setTypes.
        await newRecipe.setTypes(response)
    }
    return newRecipe
}



module.exports = {
    findAllRecipes,
    findAllRecipesName,
    findRecipeDetails,
    standarizeDiets,
    filterKeyValues,
    createRecipe
}