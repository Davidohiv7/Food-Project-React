import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import './NavBarMobile.css';

import cornerIcon from '../../img/sicon.png'

export default function NavBar() {
    return (
        <div id='NBContainer'>
            <div id='NBTitleContainer'>
                <Link to={'/home'}>
                    <span id='NBTitle1'>David's Food</span>
                    <span id='NBTitle2'>Project</span>
                </Link>
            </div>
            <div id='NBbuttons'>
                <Link to={'/home'}>
                    <button id='NBHomeButton'>Home</button>
                </Link>
                <Link to={'/createRecipe'}>
                    <button id='NBCRecipeButton'>Create Recipe</button>
                </Link>
            </div>
            <img id='NBIcon' src={cornerIcon} alt="cornerIcon"/>
        </div>
        );
  };