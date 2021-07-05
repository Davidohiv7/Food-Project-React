import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './RecipeDetailsCard.css';
import './RecipeDetailsCardMobile.css';

import { URLRecipeDetails } from '../../../utils/url.js'

import { capitalizeArray, URLParameters } from '../../../utils/stringFunctions.js'
import { createArrayFromNumber } from '../../../utils/arrayFunctions.js'

import redPepperIcon from '../../../img/icons/redbellpeppericon.png'
import fireIcon from '../../../img/icons/fireIcon.png'
import loadingIcon from '../../../img/icons/loadingIcon3.png'

function RecipeDetailCard( { match } ) {

    const url = new URLParameters()
    url.addParameters(match.params.parameters)

    const pages = useSelector(state => state.pages)

    const [recipeForDetails, setRecipeForDetails] = useState({});
    const [scoreArray, setScoreArray] = useState([]);
    const [healthScoreArray, setHealthScoreArray] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            const id = match.params.id;
            async function getDetails() {
                try {
                    const repsonse = await fetch(`${URLRecipeDetails}${id}`)
                    const recipeDetails = await repsonse.json()
                    if(recipeDetails.message)  {
                        setRecipeForDetails({message: recipeDetails.message})
                        return setLoading(false)
                    }
                    const newScoreArray = createArrayFromNumber(Math.round(recipeDetails.spoonacularScore / 10))
                    const newHealthScoreArray = createArrayFromNumber(Math.round(recipeDetails.healthScore / 10))
                    setScoreArray(newScoreArray)
                    setHealthScoreArray(newHealthScoreArray)
                    setRecipeForDetails(recipeDetails)
                    setLoading(false)
                } catch (e) {
                    setRecipeForDetails({message: e.message})
                    return setLoading(false)
                } 
            }
            getDetails(id)    
        }, []
    );


    return(
        <div id='RDContainer'>
            {
                loading ? <img id='loadingCards' src={loadingIcon} alt="Loading"/>
                :
                recipeForDetails.title ?
                <div id='RDWindow'>
                    <div id='RDMainContainer'>
                        <img id='RDImage' src={recipeForDetails.image} alt={recipeForDetails.title}/>

                        <div id='RDMainTextContainer'>

                            <div id='RDTitle'>
                                <span className='mainTitle'>Recipe Name</span>
                                <span>{recipeForDetails.title}</span>
                            </div>

                            <div id='RDDiets'>
                                <span className='mainTitle' >Diet types</span>
                                <span>{capitalizeArray(recipeForDetails.diets).join(', ')}</span>
                            </div>

                        </div>
                        
                    </div>
                    
                    <div id='RDDetailsContainer'>                  
                        <div id='RDSummaryContainer'>
                        <Link id='RDHomeLink' to={`/home/${url.createURL(url.parameters)}`}>Home</Link>
                            <span className='RDDetailsTitle'>Summary</span>
                            {(<p dangerouslySetInnerHTML={{__html: recipeForDetails.summary}}></p>)}
                        </div>
                            
                        <div id='RDInstructionsContainer'>
                            <span className='RDDetailsTitle'>Instructions</span>
                            {
                                recipeForDetails.instructions ? 
                                (<p dangerouslySetInnerHTML={{__html: recipeForDetails.instructions}}></p>) :
                                <p>No instructions provided</p>
                            }
                        </div>

                        <div id='RDScoresContainer'>

                            <div>
                                <span className='RDDetailsTitle'> Recipe score (1-10):</span>
                                <div>
                                    {
                                        scoreArray.map(s => 
                                            <img className='scoreIcon' id={`scoreIcon${s}`} src={fireIcon} alt='icon' />
                                        ) 
                                    }
                                </div>
                                
                            </div>

                            <div>
                                <span className='RDDetailsTitle'>Helthiness score (1-10):</span>
                                <div>
                                    {
                                        healthScoreArray.map(s => 
                                            <img className='healthScoreIcon' id={`healthScoreIcon${s}`} src={redPepperIcon} alt='icon' />
                                        ) 
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 
                :
                <div id='NoDetaiResponse'>
                    <span>{recipeForDetails.message}</span>
                    <Link id='RDHomeLink' to={`/home/${url.createURL(url.parameters)}`}>Home</Link>
                </div>
            }
        </div>
    )
}

  
  export default RecipeDetailCard

