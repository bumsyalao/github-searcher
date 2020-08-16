import { Action } from 'redux';
import storage from 'redux-persist/lib/storage';
import axios from 'axios';


const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export interface IgetSearchResults extends Action<typeof GET_SEARCH_RESULTS | typeof CLEAR_SEARCH_RESULTS> {
  searchResults: Object
}

export const getSearchResults = (searchResults: Object): IgetSearchResults => ({
  type: GET_SEARCH_RESULTS,
  searchResults
});

export const clearSearchResult = () => dispatch => {
  storage.removeItem('persist:root')
  dispatch({ type: 'CLEAR_SEARCH_RESULTS' })
}

export const searchUser = (search, page, perPage) => dispatch => {
  return axios.get(`http://localhost:8000/get-user?search=${search}&page=${page}&per_page=${perPage}`)
    .then((res) => {
      dispatch(getSearchResults(res.data))
    }).catch((err) => {
      throw err;
    });
}

export const searchRepos = (search, page, perPage) => dispatch => {
  return axios.get(`http://localhost:8000/get-repository?search=${search}&page=${page}&per_page=${perPage}`)
    .then((res) => {
      dispatch(getSearchResults(res.data))
    }).catch((err) => {
      throw err;
    });
}
