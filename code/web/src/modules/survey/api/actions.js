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
export const SURVEY_TOGGLE_SELECTION = 'SURVEY_TOGGLE_SELECTION'

// Actions

// Get list of products
export const getProducts = (typeAndGender) => {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'surveyProducts',
      variables: typeAndGender,
      fields: ['products { image, styleTag, id }']
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

//select product
export const toggleSelection = (id, storedProducts) => {

  const products = storedProducts

  for (const page in products) {
    products[page] = products[page].map(product => {
      if (product.id === id) {
        product.selected = !product.selected
      }

      return product
    })
  }

  return dispatch => {
    dispatch({
      type: 'SURVEY_TOGGLE_SELECTION',
      products: products,
    })
  }
}

//clear survey
export const clearSurvey = () => {
  return dispatch => {
    dispatch({
      type: 'SURVEY_CLEAR',
      products: {},
      page: 1
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
