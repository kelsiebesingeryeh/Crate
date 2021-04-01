// Imports

// App Imports
import {
  SURVEY_GET_PRODUCTS,
  SURVEY_GET_PRODUCTS_FAIL,
  SURVEY_NEXT_PAGE,
  SURVEY_PREV_PAGE
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

    case SURVEY_NEXT_PAGE:
      return {
        ...state,
        page: action.page,
      }

      case SURVEY_PREV_PAGE:
        return {
          ...state,
          page: action.page,
        }

    default:
      return state
  }
}