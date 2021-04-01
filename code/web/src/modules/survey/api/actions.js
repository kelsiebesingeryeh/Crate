// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'
import { formatSurvey } from '../../../setup/helpers'

// Actions Types
export const SURVEY_GET_PRODUCTS = 'SURVEY_GET_PRODUCTS'
export const SURVEY_GET_PRODUCTS_FAIL = 'SURVEY_GET_PRODUCTS_FAIL'
export const SURVEY_NEXT_PAGE = 'SURVEY_NEXT_PAGE'
export const SURVEY_PREVIOUS_PAGE = 'SURVEY_PREVIOUS_PAGE'
export const SURVEY_CLEAR = 'SURVEY_CLEAR'

// Actions

// Get list of products
export const getProducts = (typeAndGender) => {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'surveyProducts',
      variables: typeAndGender,
      fields: ['products { image, styleTag }']
    }))
      .then(response => {
        const products = formatSurvey(response.data.data.surveyProducts)
        if (response.status === 200) {
          return dispatch({
            type: SURVEY_GET_PRODUCTS,
            isLoading: false,
            products: products
          })
        } else {
          console.error(response)
        }
      })
      .catch(error => {

        dispatch({
          type: SURVEY_GET_PRODUCTS_FAIL,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

//clear survey
export const clearSurvey = () => {
  return dispatch => {
    dispatch({
      type: 'SURVEY_CLEAR',
      products: {}
    })
  }
}


// next page
export const nextPage = (initialPage) => {
  return dispatch => {
    dispatch({
      type: 'SURVEY_NEXT_PAGE',
      page: initialPage + 1
    })
  }
}

// previous page
export const previousPage = (initialPage) => {
  return dispatch => {
    dispatch({
      type: 'SURVEY_PREVIOUS_PAGE',
      page: initialPage - 1
    })
  }
}
