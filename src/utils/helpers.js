// @flow
/**
 * Helper functions
 * @module Helpers
 */

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
      if ({}.hasOwnProperty.call(handlers, action.type)) {
        return handlers[action.type](state, action);
      }
  
      return state;
    };
  }

  export function createRequestTypes(base) {
    return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    }, {});
  }
  
  export function datasetToObject(elem){
    const data = {};
    [].forEach.call(elem.attributes, attr => {
      /* istanbul ignore else */
      if (/^data-/.test(attr.name)) {
        const camelCaseName = attr.name.substr(5).replace(/-(.)/g, ($0, $1) => $1.toUpperCase());
        data[camelCaseName] = attr.value;
      }
    });
    return data;
  }