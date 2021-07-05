import { GET_RECIPES, GET_TYPES, UPDATE_PAGE, SORT_RECIPES, FILTER_RECIPES, LOADING_ON, FAILED_SEARCH, REMOVE_PREVIOUS_PAGE, SET_SEARCH_SIGN } from './actions_types.js'
import { URLRecipes, URLTypes } from '../utils/url.js'
import { sortArray, filterArray } from '../utils/sortAndFilterFuncionts.js'

export function updatePage(payload) {
    return {
      type: UPDATE_PAGE,
      payload
    }
  }

export function removePreviousPage() {
    return {
        type: REMOVE_PREVIOUS_PAGE,
    }
}

export function getRecipes(recipeName, parameters) {
    return async function(dispatch) {
        dispatch({ type: LOADING_ON})
        try {
            let searchParameter = recipeName
            if(parameters && parameters.search) {
                searchParameter = parameters.search.split('$').join(' ')
            }
            const repsonse = await fetch(`${URLRecipes}?name=${searchParameter}`)
            let recipesResponse = await repsonse.json()
            if(recipesResponse.message)  {
                dispatch({type: FAILED_SEARCH})
                dispatch({type: SET_SEARCH_SIGN, payload: recipesResponse.message})
                return  setTimeout(function(){ dispatch(setSearchSign(false)) }, 5000);
            }
            //Revisar si cuando recargo la pagina y tengo el parametro Sort activo me devuelve todo organizado
            if(parameters && parameters.sort){
                const sortParameters = parameters.sort.split('$')
                sortParameters[1] = sortParameters[1] === 'true'
                recipesResponse = sortArray(recipesResponse, sortParameters[0], sortParameters[1])
            }
            if(parameters && parameters.page){
                return dispatch({ type: GET_RECIPES, recipeName: recipesResponse, page: parameters.page})
            }
            return dispatch({ type: GET_RECIPES, recipeName: recipesResponse })
        } catch (e) {
            dispatch({type: FAILED_SEARCH})
            dispatch({type: SET_SEARCH_SIGN, payload: 'Couldn`t connect to the server, try later'})
            return  setTimeout(function(){ dispatch(setSearchSign(false)) }, 5000);
        }
    }
}

export function getTypes() {
    return async function(dispatch) {
        try {
            const repsonse = await fetch(URLTypes)
            const typesResponse = await repsonse.json()
            dispatch({ type: GET_TYPES, payload: typesResponse })
        } catch (e) {
            dispatch({type: SET_SEARCH_SIGN, payload: 'Couldn`t connect to the server, try later'})
            return  setTimeout(function(){ dispatch(setSearchSign(false)) }, 5000);
        }
    }
}

export function sortRecipes(data) {
    //Cuando tenga acceso a la API externa revisar esto
    if(data.recipes.length > 0) {
        const payload = sortArray(data.recipes, data.type, data.normal)
        return {
            type: SORT_RECIPES,
            payload
      }
    }
    const payload = []
    return {
        type: SORT_RECIPES,
        payload
  }
}

export function setSearchSign(payload) {
    return {
        type: SET_SEARCH_SIGN,
        payload
      }
}

export function filterRecipes(data) {
    const payload = filterArray(data.recipes, data.diet)
    return {
        type: FILTER_RECIPES,
        payload
      }
}




