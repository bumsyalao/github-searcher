import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import { getSearchResults, searchUser, searchRepos } from './actions/appAction';

type MyState = {};
type MyProps = {
  searchUser: any;
  searchRepos: any;
  searchResults: any;
};

class App extends React.Component<MyProps, MyState> {

  onSearch = async (search, filter) => {
    if (filter === 'repository') {
      return this.props.searchRepos(search);
    }
    else {
      return this.props.searchUser(search);
    }
  }
  render() {
    const { searchResults } = this.props.searchResults.appReducer;
    console.log(searchResults, this.props.searchResults.appReducer, '=====im here')
    return (
      <div className='App'>
        <SearchBar onSearch={this.onSearch} />
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


export default connect(mapStateToProps, { searchUser, getSearchResults, searchRepos })(App);