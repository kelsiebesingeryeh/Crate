import Survey from './Survey'
import { getProducts, nextPage } from './api/actions'
import { surveyReducer } from './api/state'

describe('Survey', () => {
  it('should exist', () => {
    expect(true).toEqual(true);
  });

  it('should exist', () => {
    expect(true).toEqual(true);
  });
});

describe('state', () => {
  it('should return state if no action is given', () => {
    const actual = surveyReducer([], {});
    expect(actual).toEqual([]);
  })

  it.only('should return state and increase the page', () => {
    const actionObj = {
      type: 'SURVEY_NEXT_PAGE',
      page: 2}

    const results = surveyReducer(undefined, actionObj)

    expect(results).toEqual({"isLoading": false, "page": 2, "products": {}});
  })
  
  it('should have a type SURVEY_GET_PRODUCTS', () => {
    // const products = ????;
    // const expectedAction = {
    //   type: 'SURVEY_GET_PRODUCTS',
    //   products: {"1": "edgy shirt"}
    // };

    // const results = getProducts(productId);

    // expect(results).toEqual(expectedAction);
  });

  it.only('should have a type SURVEY_NEXT_PAGE', () => {
    const page = 1
    const results = nextPage(page)
    expect(results.page).toEqual(2);
  });
});