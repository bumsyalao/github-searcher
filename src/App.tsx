import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import { getSearchResults, searchUser, searchRepos } from './actions/appAction';

type MyState = {};
type MyProps = {
  searchUser: any;
  searchRepos: any;
  searchResult: Object;
};

class App extends React.Component<MyProps, MyState> {

  onSearch = async (search, filter) => {
    try {
      if (filter === 'repository') {
        await this.props.searchRepos(search);
      }
      else {
        await this.props.searchUser(search);
      }
    } catch (err) { console.log(err, '===error') }
  }
  render() {
    const { searchResult } = this.props;
    return (
      <div className='App'>
        <SearchBar onSearch={this.onSearch} />
        {searchResult &&
          <Dashboard searchResult={searchResult} />
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