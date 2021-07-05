require('dotenv').config();
const { API_KEY } = process.env;

const URL_Search = `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`
const URL_Search_Detailed = `https://api.spoonacular.com/recipes/XXXXX/information?&apiKey=${API_KEY}`
module.exports = {
    URL_Search,
    URL_Search_Detailed
};
