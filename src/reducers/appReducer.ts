
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
  if (action.type === 'GET_SEARCH_RESULTS') {
    return {
      ...state,
      searchResults: action.searchResults,
    };
  }

  return state;
}

export default appReducer;