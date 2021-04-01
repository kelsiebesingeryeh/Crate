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

  it('should update the survey page', () => {
    const actionObj = {
      type: 'SURVEY_NEXT_PAGE',
      page: 2
    }

    const results = surveyReducer(undefined, actionObj)

    expect(results).toEqual({"isLoading": false, "page": 2, "products": {}});
  })
  
  it('should update the state to include products', () => {
    let actionObj = {
      type: 'SURVEY_GET_PRODUCTS',
      products: {}
    };
    const results = surveyReducer(undefined, actionObj)
    expect(results.products).toEqual({});

    actionObj = {
      type: 'SURVEY_GET_PRODUCTS',
      products:  {"1": "edgy shirt"}
    };
    const newResults = surveyReducer(results, actionObj)
    expect(newResults.products).toEqual({"1": "edgy shirt"});
  });
});

// describe('actions', () => {
//   it('should increase the page by 1', () => {
//     const page = 1
//     const results = nextPage(page)
//     expect(results.page).toEqual(2);
//   });
// });

//functional testing
// do we test if the state has props? test each prop?

// KB NOTES - integration testing
// does the  survey exist?
// is there a header
// is there a survey header
// image display, is it displaying the images
// next button
// when i click on an image, is there a check mark
// when i click on the next button, the next page should