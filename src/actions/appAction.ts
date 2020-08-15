import { Action } from 'redux';
import axios from 'axios';

type IAction = IgetSearchResults;

const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';

export interface IgetSearchResults extends Action<typeof GET_SEARCH_RESULTS> {
  searchResults: Object
}

export const getSearchResults = (searchResults: Object): IgetSearchResults => ({
  type: GET_SEARCH_RESULTS,
  searchResults
})

export const searchUser = (search) => dispatch => {
  return axios.get(`http://localhost:8000/get-user?search=${search}`)
    .then((res) => {
      dispatch(getSearchResults(res.data))
    }).catch((err) => {
      throw err;
    });
}

export const searchRepos = (search) => dispatch => {
  return axios.get(`http://localhost:8000/get-repository?search=${search}`)
    .then((res) => {
      dispatch(getSearchResults(res.data))
    }).catch((err) => {
      throw err;
    });
}
