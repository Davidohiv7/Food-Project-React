import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './SearchBar.css';
import './SearchBarMobile.css';

import { useDispatch, useSelector } from 'react-redux'

import { getRecipes, setSearchSign } from '../../../actions/actions.js'

import { URLParameters } from '../../../utils/stringFunctions'

export default function SearchBar() {

    let { parameters } = useParams()
    const url = new URLParameters()
    url.addParameters(parameters)
    let history = useHistory()

    const dispatch = useDispatch()

    const searchSign = useSelector(state => state.searchSign)

    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = function(e) {
        setSearchInput(e.target.value)
      }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(searchInput) {
            history.replace(`/home/search:${searchInput.split(' ').join('$')}_${url.createURL(url.parameters, 'search')}`)
            setSearchSign(false)
            const lowCaseSearchInput = searchInput.toLowerCase();
            dispatch(getRecipes(lowCaseSearchInput))
            return setSearchInput('')
      }
      dispatch(setSearchSign('The searchbar is empty, try writing down the recipe name'))
      setTimeout(function(){ dispatch(setSearchSign(false)) }, 5000);
    }
    return (
        <div id='SBContainer'>
            <form id='SB' onSubmit={handleSubmit}>
                <div id='SBinputContainer'>
                    <label id='SBtitle'>RECIPE NAME</label>
                    <input id='SBInput' type="text"  onChange={handleInputChange} value={searchInput} name="HSearchBar"  placeholder='Search a recipe'/>
                </div>
                <div id='SBButtonContainer'>
                    <button id='SBButton'>Search</button>
                </div>
            </form>
            {
                searchSign && 
                <div id='SearchSign'>
                    <button onClick={() => dispatch(setSearchSign(false))}>X</button>
                    <span>{searchSign}</span>
                </div>
            }
        </div>
    );
  };