
import {
  Reducer,
} from 'redux';

import { IgetSearchResults } from '../actions/appAction';

type IAction = IgetSearchResults;
interface IState {
  searchResults: Object
}

const appReducer: Reducer<IState, IAction> = (
  state = { searchResults: {} },
  action
) => {
  switch (action.type) {
    case 'GET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.searchResults,
      };
    case 'CLEAR_SEARCH_RESULTS':
      {
        return {
          ...state,
          searchResults: {}
        };
      }
    default: return state;
  }
}

export default appReducer;