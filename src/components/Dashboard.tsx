import React from 'react';
import ResultCard from './ResultCard';

type MyState = {};
type MyProps = {
  searchResult: any
};

class Dashboard extends React.Component<MyProps, MyState> {
  render() {
    const { searchResult } = this.props;
    return (
      <div className="dashboard">
        <p>Showing {searchResult && searchResult.total_count} results...</p>
        <div className="dashboard-card">
          {searchResult && searchResult.items.map((result) => (
            <ResultCard searchResult={result} />
          ))}
        </div>
      </div>
    )
  }

}

export default Dashboard;
