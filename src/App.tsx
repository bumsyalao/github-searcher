import React from 'react';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';

class App extends React.Component<{}> {
  componentDidMount() {
    // this.pointer = 3;
  }
  render() {
    return (
      <div className='App'>
        <SearchBar />
        <Dashboard message={''} />
      </div>
    )
  }
}

export default App;