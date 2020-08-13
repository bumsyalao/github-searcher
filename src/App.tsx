import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import { getSearchResults, searchUser } from './actions/appAction';

type MyState = {
  searchResult: Object
};
type MyProps = {
  searchUser: any;
};

class App extends React.Component<MyProps, MyState> {

  componentDidMount() {
    // this.pointer = 3;
  }
  onSearch = (search) => {
    this.props.searchUser(search).then((res) => {
      console.log(res, '=====what?');
    })
  }
  render() {
    return (
      <div className='App'>
        <SearchBar onSearch={this.onSearch} />
        <Dashboard message={''} />
      </div>
    )
  }
}

const mapStateToProps = (state: MyState) => ({
  ...state,
  searchResults: state
});


export default connect(mapStateToProps, { searchUser, getSearchResults })(App);