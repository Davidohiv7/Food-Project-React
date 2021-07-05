import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory  } from 'react-router-dom';
import './Filters.css';
import './FiltersMobile.css';

import { capitalize, URLParameters } from '../../../utils/stringFunctions.js'

import { sortRecipes, filterRecipes, getRecipes, removePreviousPage } from '../../../actions/actions.js'

function RecipeCFiltersard( { parameters } ) {

    const url = new URLParameters()
    url.addParameters(parameters)

    let history = useHistory()

    const dispatch = useDispatch()

    const recipesList = useSelector(state => state.recipesList)
    const sortedRecipesList = useSelector(state => state.sortedRecipesList)
    const typesList = useSelector(state => state.typesList)


    const handleClick = (e) => {
        dispatch(removePreviousPage())
        setTimeout(() => dispatch(sortRecipes({recipes: [...sortedRecipesList], type: e.target.value, normal: true})), 10);
    }

    const handleClickReverse = (e) => {
        dispatch(removePreviousPage())
        setTimeout(() => dispatch(sortRecipes({recipes: [...sortedRecipesList], type: e.target.value, normal: false})), 10);
    }

    const handleSelectChange = function(e) {
        dispatch(removePreviousPage())
        setTimeout(() => dispatch(filterRecipes({recipes: [...recipesList], diet: e.target.value})), 10); 
    }

    return(
        <div id='FiltersContainer'>
            <div id='OrganizeContainer'>
                <span id='OrganizeTitle'>Organize the recipes</span>
                <div id='ByTitleContainer'>
                    <span>By title</span>
                    <div className='FilterButtonContainer'>
                        {/* AQUI VER COMO HAGO PARA CREAR EL LINK, EN CASO DE QUE YA EXISTA UN FILTER O NO,
                        EN CASO DE QUE YA EXISTA OTRO PARAMETRO QUE NO SEA FILTER
                        VER SI CREO OTRA FUNCION QUE LO HAGO AUTOMATICO PARA NO HACER CASI LOGICA AQUI */}
                        <Link to={`/home/sort:title$true_${url.createURL(url.parameters, 'sort')}`}>
                            <button value='title' onClick={handleClick}>A - Z</button>
                        </Link>
                        <Link to={`/home/sort:title$false_${url.createURL(url.parameters, 'sort')}`}>
                            <button value='title' onClick={handleClickReverse}>Z - A</button>
                        </Link>
                    </div>
                </div>

                <div id='ByScoreContainer'>
                    <span>By score</span>
                    <div className='FilterButtonContainer'>
                        <Link to={`/home/sort:spoonacularScore$false_${url.createURL(url.parameters, 'sort')}`}>
                            <button value='spoonacularScore' onClick={handleClickReverse}>Max - Min</button>
                        </Link>
                        <Link to={`/home/sort:spoonacularScore$true_${url.createURL(url.parameters, 'sort')}`}>
                            <button value='spoonacularScore' onClick={handleClick}>Min - Max</button>
                        </Link>     
                    </div>
                </div>

                <div>
                    <span>By Healthiness</span>
                    <div className='FilterButtonContainer'>
                        <Link to={`/home/sort:healthScore$false_${url.createURL(url.parameters, 'sort')}`}>
                            <button value='healthScore' onClick={handleClickReverse}>Max - Min</button>
                        </Link>
                        <Link to={`/home/sort:healthScore$true_${url.createURL(url.parameters, 'sort')}`}>
                            <button value='healthScore' onClick={handleClick}>Min - Max</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div id='FilterContainer'>
                <span>Filter recipes by diet type</span>
                <select onChange={handleSelectChange} id='DropDownListRecipes' name="select">
                    <option value='No diet selected'>No diet selected</option>
                    {
                        typesList.map(type => {
                            return (
                                <option key={type.id} value={capitalize(type.name)}>
                                    {capitalize(type.name)}
                                </option> 
                            )
                        })
                    }
                </select>
            </div>
            <button id='GetAllButton' onClick={() => {
                dispatch(getRecipes('', url.parameters))
                history.replace(`/home/${url.createURL(url.parameters, 'search')}`)
            }}>
                Get all recipes
            </button>
        </div>
    )
}

  export default RecipeCFiltersard