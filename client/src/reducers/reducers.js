import { GET_RECIPES, GET_TYPES, UPDATE_PAGE, SORT_RECIPES, FILTER_RECIPES, LOADING_ON, FAILED_SEARCH, REMOVE_PREVIOUS_PAGE, SET_SEARCH_SIGN } from '../actions/actions_types.js'


export const initialState = {
    recipesList: [],
    sortedRecipesList: [],
    typesList: [],
    pages: {
      active: false,
      recipesInPage: [],
      numerOfPages: 0,
      page: 0
    },
    loading: false,
    searchSign: false
  };

  export const foodStoreReducer = (state = initialState, action) => {
    switch (action.type) {
          case GET_RECIPES:
            return {
              ...state,
              recipesList: action.recipeName,
              sortedRecipesList: action.recipeName,
              pages: {
                active: true,
                numerOfPages: Math.ceil(action.recipeName.length / 9),
                page: action.page ? action.page : 1,
                recipesInPage:  Math.ceil(action.recipeName.length / 9) > 1 ?
                action.page ? action.recipeName.slice((action.page-1) * 9,(action.page) * 9) : action.recipeName.slice(0 , 9)
                : action.recipeName
              },
              loading: false
            }
          case GET_TYPES:
            return {
              ...state,
              typesList: action.payload
            }
          case UPDATE_PAGE:
            return {
              ...state,
              pages: {
                ...state.pages,
                page: action.payload.page,
                recipesInPage: state.sortedRecipesList.slice((action.payload.page-1) * 9,(action.payload.page) * 9)
              },
              loading: false
            }
          case REMOVE_PREVIOUS_PAGE:
            return {
              ...state,
              pages: {
                ...state.pages,
                recipesInPage: []
              },
              loading: true
            }
          case SET_SEARCH_SIGN:
            return {
              ...state,
              searchSign: action.payload
            }
          case SORT_RECIPES:
            return {
              ...state,
              sortedRecipesList: action.payload,
              pages: {
                ...state.pages,
                recipesInPage: action.payload.slice((state.pages.page-1) * 9,(state.pages.page) * 9)
              },
              loading: false
            }
            case FILTER_RECIPES:
              return {
                ...state,
                sortedRecipesList: action.payload,
                pages: {
                  active: true,
                  numerOfPages: Math.ceil(action.payload.length / 9),
                  page: 1,
                  recipesInPage:  action.payload.slice(0, 9)
                },
                loading: false
              }
            case LOADING_ON:
              return {
                ...state,
                loading: true
              }
            case FAILED_SEARCH:
              return {
                ...state,
                recipesList: [],
                sortedRecipesList: [],
                pages: {
                  active: false,
                  numerOfPages: 0,
                  page: 0,
                  recipesInPage:  []
                },
                loading: false
              }
        default:
          return {...state}
    }
  } 