import React from 'react';
import { useSelector } from 'react-redux'
import './RecipeForm.css';
import './RecipeFormMobile.css';

import { URLCreateRecipe } from '../../../utils/url.js'

import bellPepperIcon from '../../../img/icons/redbellpeppericon.png'
import fireIcon from '../../../img/icons/fireIcon.png'
import searchIcon from '../../../img/icons/searchIIcon.webp'

import { scoreArray, mainValidation, resetInput } from '../../../utils/formFunctions.js'
import { capitalize } from '../../../utils/stringFunctions.js'


export default function RecipeForm({ setSuccess, setErrors }) {

    const typesList = useSelector(state => state.typesList)

    const [formInputs, setFormInputs] = React.useState({
        title: '',
        summary: '',
        instructions: '',
        spoonacularScore: '',
        healthScore: '',
        image: '',
        types: []
    });

    const [imagePreview, setImagePreview] = React.useState({imagePreview: ''});
    
    const handleInputChange = function(e) {
    setFormInputs({
        ...formInputs,
        [e.target.name]: e.target.value
        });
    }

    const handleImagePreview = function(e) {
        setImagePreview({...imagePreview, imagePreview: formInputs.image})
    }

    const handleSelectChange = function(e) {
        if(e.target.value !== '-Select a diet') {
            const validation = formInputs.types.includes(e.target.value.toLowerCase())
            if(!validation) {
                setFormInputs({
                    ...formInputs,
                    types: [...formInputs.types, e.target.value.toLowerCase()]
                });
            }
            if(validation) {
                const filtDiets = formInputs.types.filter(d => d !== e.target.value.toLowerCase())
                setFormInputs({
                    ...formInputs,
                    types: filtDiets
                })
            }
        }
        e.target.selectedIndex = 0
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const inputErrors = mainValidation(formInputs)
        if(Object.keys(inputErrors).length === 0) {
            try {
                const newRecipe = await fetch(`${URLCreateRecipe}`, 
                {
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(formInputs)
                })
                const response = await newRecipe.json()
                if(response.message) {
                    return setErrors([[response.message]])
                }
                setFormInputs(resetInput)
                setImagePreview({...imagePreview, imagePreview: ''})
                setSuccess('The recipe was succesfully created')
                setTimeout(function(){ setSuccess(false) }, 5000);
                return setErrors(false)
            } catch (error) {
                setErrors([[error]])
            }
        }
        //Aqui le estoy enviando los errores al contenedor padre
        return setErrors(Object.values(inputErrors))
    }

    return (
        <form id='FormContainer' onSubmit={handleSubmit}>
            <div id='FLeft'>
                <span>Share your recipe</span>
            </div>
            <div id='FRight'>
                <span>Fill it!</span>
                <div id='RecipeNameContainer'>
                    <label>Recipe name</label>
                    <input name="title" onChange={handleInputChange} value={formInputs.title} placeholder="Your recipe name..."/>
                </div>
                <div id='SummaryContainer'>
                    <label>Summary:</label>
                    <textarea name="summary" onChange={handleInputChange} value={formInputs.summary} placeholder="A brief description of your recipe..."/>
                </div>
                <div id='InstructionsContainer'>
                    <label>Instructions:</label>
                    <textarea name="instructions" onChange={handleInputChange} value={formInputs.instructions} placeholder="The steps to cook yor recipe..."/>
                </div>
                <div id='ScoreContainer'>
                    <span>Score:</span>
                    <div id='ScoreContainerIconsContainer'>
                        {
                            scoreArray.map(i =>
                                <img 
                                    key={i}
                                    name={`spoonacularScore${i}`}
                                    className={i <= formInputs.spoonacularScore ? 'ScoreSelectedButton' : undefined} 
                                    onClick={e =>  setFormInputs({...formInputs, spoonacularScore: i})} 
                                    src={fireIcon}
                                    alt='Score Icon'
                                />
                            )
                        }
                    </div>
                </div>
                <div id='HealthinessScoreContainer'>
                    <span>Healthiness score:</span>
                    <div id='HealthinessScoreContainerIconsContainer'>
                        {
                            scoreArray.map(i =>
                                <img
                                    key={i}
                                    name={`healthScore${i}`}
                                    className={i <= formInputs.healthScore ? 'HealthScoreSelectedButton' : undefined} 
                                    onClick={e =>  setFormInputs({...formInputs, healthScore: i})} 
                                    src={bellPepperIcon}
                                    alt='Health Icon'
                                />
                            )
                        }
                    </div>
                </div>
                <div id='ImageContainer'>
                    <span>Image:</span>
                    <div id='ImageInputContainer'>
                        <input name="image" onChange={handleInputChange} value={formInputs.image} placeholder="URL image..."/>
                        <img name='ImagePreviewButton' onClick={() =>  handleImagePreview()} src={searchIcon} alt="searchIcon"/>
                    </div>
                    <img src={imagePreview.imagePreview} alt="Paste a valid URL and click the button to see the preview"/>
                </div>
                <div id='SelectContainer'>
                    <span>Select diet types:</span>
                    <select onChange={handleSelectChange} id='FormDropDownListRecipes' name="formSelect">
                        <option key='NoDiet' value='-Select a diet'>-No diet type selected</option>
                        {
                            typesList.map(type => {
                                return <option key={type.id} value={capitalize(type.name)}>{capitalize(type.name)}</option>
                            })
                        }
                    </select>
                    <ul>
                        {
                            formInputs.types.map(t => {
                                return <li>{capitalize(t)}</li>
                            })
                        }
                    </ul>
                </div>
                <div id='SubmitContainer'>
                    <input type="submit" value='Send your recipe'/>
                </div>
            </div>
        </form>
    )
}
