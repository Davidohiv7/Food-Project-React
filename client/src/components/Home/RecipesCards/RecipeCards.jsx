import React from 'react';
import { useSelector } from 'react-redux'

import './RecipeCards.css';

import RecipeCard from '../RecipeCard/RecipeCard.jsx'

function RecipeDetailsCard( { parameters } ) {

    const recipesInPage = useSelector(state => state.pages.recipesInPage)

    return(
        <div id='RecipeCards'>
            {
                recipesInPage.length > 0 ?
                recipesInPage.map(recipe =>
                        <RecipeCard parameters={parameters} recipe={recipe}/>
                    ):
                <div id='NoResultsDiv'> There are no recipes. Try searching recipes with the 
                <span> Searchbar</span> or clicking the 
                <span> Get all recipes button </span>
                in the left bar 
                </div>
            }
        </div>
    )
}

  
  export default RecipeDetailsCard