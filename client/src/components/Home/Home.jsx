import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './Home.css';
import './HomeMobile.css';

import img1 from '../../img/homeRightImg.png'
import loadingIcon from '../../img/icons/loadingIcon3.png'

import { URLParameters } from '../../utils/stringFunctions'

import { getRecipes, getTypes } from '../../actions/actions.js'


import SearchBar from './SearchBar/SearchBar.jsx'
import HomeTitle from './HomeTitle/HomeTitle.jsx'
import RecipeCards from './RecipesCards/RecipeCards.jsx'
import Pages from './Pages/Pages.jsx'
import Filters from './Filters/Filters.jsx'

export default function Home( { match } ) {

    const url = new URLParameters()

    const dispatch = useDispatch()

    const loading = useSelector(state => state.loading)

    useEffect(
        () => {
            
            dispatch(getTypes())
            if(match.params.parameters) {
                url.addParameters(match.params.parameters)
                return dispatch(getRecipes('', url.parameters))
            }
            dispatch(getRecipes('')) 
        },
        []);
        

    return (
        <div id='HContainer'>
            <div id='HLeft'>
                <HomeTitle/>
                <SearchBar parameters={match.params.parameters}/>
            </div>

            <div id='HRight'>
                <img id='img1' src={img1} alt='img1'></img>
            </div>

            <div id='HRecipesContainer'>
                <Filters parameters={match.params.parameters}/>
                {
                    loading ?  <img id='loadingCards' src={loadingIcon} alt="Loading"/>
                    :
                    <div id='HCardsPagesContainer'>
                        <RecipeCards parameters={match.params.parameters}/>
                        <Pages parameters={match.params.parameters}/>
                    </div>
                }
                
            </div>
        </div>
        );
  };