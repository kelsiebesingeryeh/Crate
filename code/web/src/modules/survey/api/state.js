// Imports

// App Imports
import {
  SURVEY_GET_PRODUCTS,
  SURVEY_GET_PRODUCTS_FAIL,
  SURVEY_CLEAR,
  SURVEY_NEXT_PAGE,
  SURVEY_PREVIOUS_PAGE
} from './actions'

// Initial State
const surveyInitialState = {
  isLoading: false,
  page: 1,
  products: {}
}

// State
export const surveyReducer = (state = surveyInitialState, action) => {
  switch (action.type) {
    case SURVEY_GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }

    case SURVEY_CLEAR:
      return {
        ...state,
        products: action.products,
        page: action.page
      }

    case SURVEY_NEXT_PAGE:
      return {
        ...state,
        page: action.page,
      }

    case SURVEY_PREVIOUS_PAGE:
      return {
        ...state,
        page: action.page,
      }

    case TOGGLE_SELECTION:
      return {
        ...state,
        products: action.products
      }

    default:
      return state
  }
}
