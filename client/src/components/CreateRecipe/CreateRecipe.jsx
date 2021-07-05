import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import './CreateRecipe.css';

import { getTypes } from '../../actions/actions.js'

import RecipeForm from './RecipeForm/RecipeForm.jsx';
import Errors from './RecipeForm/Errors/Errors.jsx'
import Success from './RecipeForm/Success/Success.jsx'


export default function CreateRecipe() {

    const dispatch = useDispatch()
    const [success, setSuccess] = React.useState(false);
    const [errors, setErrors] = React.useState(false);

    useEffect(
        () => {
            dispatch(getTypes())
        });

    return (
        <div id='CreateRecipeContainer'>
            <RecipeForm  setSuccess={setSuccess} setErrors={setErrors}/>
            {
                success && <Success success={success} setSuccess={setSuccess}/>
            }
            {
                errors && <Errors errors={errors} setErrors={setErrors}/>
            }
            
        </div>
    )

}
  