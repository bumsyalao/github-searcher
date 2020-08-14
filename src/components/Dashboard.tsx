import React from 'react';
import ResultCard from './ResultCard';

type MyState = {};
type MyProps = {
  searchResult: Object
};

class Dashboard extends React.Component<MyProps, MyState>{
  render() {
    return (
      <div className="dashboard">
        <p>Showing {this.props.searchResult.total_count} results...</p>
        {this.props.searchResult.items.map((result) => (
          <ResultCard searchResult={result} />
        ))}
      </div>
    )
  }

}

export default Dashboard;
