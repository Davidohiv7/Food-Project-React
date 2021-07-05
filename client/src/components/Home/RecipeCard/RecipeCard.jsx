import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import './RecipeCard.css';


import { capitalize, capitalizeArray, URLParameters } from '../../../utils/stringFunctions.js'


function RecipeCard( { recipe, parameters }) {

    const url = new URLParameters()
    url.addParameters(parameters)
    const urlLink = url.createURL(url.parameters)

    return(
        <div className='RecipeCardContainer' key={recipe.id} >
            <Link className='Link' to={`/home/${urlLink ? urlLink : 'page:1'}/${recipe.id}`}>
                <img className='RecipeCardImage' src={recipe.image} alt={recipe.title}/>
                <div className='RecipeCardTitle'>
                    <span>Recipe name</span>
                    {capitalize(recipe.title)}
                    </div>
                <div className='RecipeCardDiets'>
                    <span>Diet types</span>
                    {capitalizeArray(recipe.diets).join(', ')}
                </div>
                <div className='RecipeCardID'>
                    ID: {recipe.id}
                </div>
            </Link>
        </div>
    )
}

  export default RecipeCard