import Survey from './Survey'
import { surveyReducer } from './api/state'

describe('Survey State', () => {
  it('should return state if no action is given', () => {
    const actual = surveyReducer([], {});
    expect(actual).toEqual([]);
  })

  it('should update the survey page', () => {
    const actionObjNext = {
      type: 'SURVEY_NEXT_PAGE',
      page: 2
    }

    const actionObjPrev = {
      type: 'SURVEY_NEXT_PAGE',
      page: 1
    }

    const resultsNext = surveyReducer(undefined, actionObjNext)

    expect(resultsNext).toEqual({"isLoading": false, "page": 2, "crateId": 0, "products": {}});

    const resultsPrev = surveyReducer(undefined, actionObjPrev);

    expect(resultsPrev).toEqual({"isLoading": false, "page": 1, "crateId": 0, "products": {}});
  })

  it('should update the state to include products', () => {
    let actionObj = {
      type: 'SURVEY_GET_PRODUCTS',
      crateId: 1,
      products: {}
    };
    const results = surveyReducer(undefined, actionObj)
    expect(results.products).toEqual({});
    expect(results.crateId).toEqual(1);

    actionObj = {
      type: 'SURVEY_GET_PRODUCTS',
      crateId: 2,
      products:  {"1": "edgy shirt"}
    };
    const newResults = surveyReducer(results, actionObj)
    expect(newResults.products).toEqual({"1": "edgy shirt"});
    expect(newResults.crateId).toEqual(2);
  });

  it('should clear its data', () => {
    const actionObjPost = {
      type: 'SURVEY_GET_PRODUCTS',
      crateId: 2,
      products:  {"1": "edgy shirt"}
    };
    const results = surveyReducer(undefined, actionObjPost)
    expect(results.products).toEqual({"1": "edgy shirt"});
    expect(results.crateId).toEqual(2);

    const actionObjClear = {
      type: 'SURVEY_CLEAR',
      products: {},
      page: 1,
      crateId: 0
    };
    const newResults = surveyReducer(results, actionObjClear)
    expect(newResults.products).toEqual({});
    expect(newResults.crateId).toEqual(0);
  });

  it('should select items', () => {
    const state = {
      products: {
        0: [{selected: false, id: 1}, {selected: false, id: 2}]
      }
    }

    const actionObj = {
      type: 'SURVEY_TOGGLE_SELECTION',
      products:  {
        '0': [{selected: false, id: 1}, {selected: true, id: 2}]
      }
    };
    const results = surveyReducer(state, actionObj)
    expect(results.products['0'][1].selected).toEqual(true);
  });

  it('should process a user retaking the survey', () => {
    let actionObj = {
      type: 'SURVEY_GET_PRODUCTS',
      products: {
        '0': [{selected: true, id: 1}, {selected: true, id: 2}]
      },
      crateId: 20
    };
    const results = surveyReducer(undefined, actionObj)
    expect(results.products).toEqual({
      '0': [{selected: true, id: 1}, {selected: true, id: 2}]
    });
    expect(results.crateId).toEqual(20)

    const actionObjRetake = {
      type: 'RETAKE_SURVEY',
      products: {
        '0': [{selected: false, id: 1}, {selected: false, id: 2}]
      },
      page: 1,
    };

    const newResults = surveyReducer(results, actionObjRetake)
    expect(newResults.products).toEqual({
      '0': [{selected: false, id: 1}, {selected: false, id: 2}]
    });
    expect(newResults.crateId).toEqual(20);
  });
});
