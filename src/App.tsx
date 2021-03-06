import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import {
  getSearchResults,
  searchUser, searchRepos, clearSearchResult
} from './actions/appAction';

type MyState = {};
type MyProps = {
  searchUser: Function;
  searchRepos: Function;
  searchResults: any;
  clearSearchResult: Function;
};


/**
 * App class, renders searchBar and Dashboard
 *
 * @class App
 * @extends {React.Component<MyProps, MyState>}
 */
class App extends React.Component<MyProps, MyState> {

  componentDidMount() {
    this.props.clearSearchResult();
  }

  onClearSearch = () => {
    this.props.clearSearchResult();
  }

  onSearch = async (search: string, filter: string, page: number, perPage: number) => {
    if (filter === 'repository') {
      return this.props.searchRepos(search, page, perPage);
    }
    else {
      return this.props.searchUser(search, page, perPage);
    }
  }
  render() {
    const { searchResults } = this.props.searchResults.appReducer;
    return (
      <div className='App'>
        <SearchBar onSearch={this.onSearch}
          searchResult={searchResults}
          onClearSearch={this.onClearSearch}
        />
        {searchResults &&
          <Dashboard searchResult={searchResults} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state: MyState) => ({
  ...state,
  searchResults: state
});
const actions = { searchUser, getSearchResults, searchRepos, clearSearchResult }

export default connect(mapStateToProps, actions)(App);